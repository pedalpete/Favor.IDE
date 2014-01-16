'use static';

app.factory('OpenFilesModel',function($rootScope, $q){
	
	var files = [];
	var activeFiles = [];
	var OpenFilesObj={};



	function changeActive(setActive){ // remove active files and set new active files
		angular.forEach(files, function(a){
			if(findFileIdx(a,setActive).length===1){
				a.active=true;
			} else {
				a.active=false;
			}
		});
		$rootScope.$broadcast('updateActiveFiles',activeFiles)
		return ;
	}

	function removeFromActive(file){
		activeFiles.splice(findFileIdx(file,activeFiles),1);
		file.active=false;
		changeActive(activeFiles);

	}

	function findMatchingFile(a,b){
		return (a.path!='' && a.path === b.path || a.opened_at == b.opened_at);
			
	}
	function findFileIdx(file, fileArray){
		return $.map(fileArray, function(f,i){
			if(findMatchingFile(f,file)){
				return i;
			}
		});
	}

	function closeFile(file){
		var idx = findFileIdx(file, files);
		removeFromActive(file);
		if(idx.length === 0){
			console.log("something went wrong, couldn't find file to close");
			return;
		} else {
			var i = idx[0];
			files.splice(i,1);
			if(file.active===true && files.length>0){
				changeActive(i<files.length ? [i] : [i-1]);
			}
		}

		$rootScope.$broadcast('updateOpenFiles',files);

 	}

	OpenFilesObj.openFile = function(multi,file){
		var isOpen = findFileIdx(file, files);
		if(isOpen.length === 0){ //file was not found in array of open files
			files.push(file);
			isOpen.push(files.length-1);
		}
		if(file.active===true) return removeFromActive(file);
		if(multi==='click' || !multi) return changeActive(activeFiles=[file]);
		activeFiles.push(file);
		if(multi==='ctrl-click') return changeActive(activeFiles);
	}

	OpenFilesObj.files = function(){
		return files;
	}

	OpenFilesObj.activeFiles = function(){
		return activeFiles;
	}
	OpenFilesObj.setActive = function(files){
		checkifFilesAreActive
		return changeActive(files);
	}

	OpenFilesObj.close = function(file){
		if(file.last_save!=file.content){
			file.close_after_save = true;
			if(file.path===''){
				$rootScope.$broadcast('saveAs',file);
			}
		} else {
			closeFile(file);
		}
	}

	return OpenFilesObj;
});