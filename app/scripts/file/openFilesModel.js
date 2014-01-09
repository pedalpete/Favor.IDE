'use static';

app.factory('OpenFilesModel',function($rootScope, $q){
	
	var files = [];
	var OpenFilesObj={};



	function changeActive(setActive){ // remove active files and set new active files
		angular.forEach(files, function(a){
			a.active=false;
		});
		angular.forEach(setActive, function(i){
			files[i].active=true;
		});
		return files;
	}

	function findFile(file){
		return $.map(files, function(f,i){	
			if(f.path === file.path || f.opened_at == file.opened_at){
				return i;
			};
		});
	}

	function closeFile(file){
		var idx = findFile(file);
		if(idx.length === 0){
			console.log("something went wrong, couldn't find file to close");
			return;
		} else {
			angular.forEach(idx,function(i){
				files.splice(i,1);
				if(file.active===true && files.length>0){
			   	 console.log(i<files.length ? [i] : [i-1]);
					changeActive(i<files.length ? [i] : [i-1]);
				}
			});
		}

		$rootScope.$broadcast('updateOpenFiles',files);

 	}

	OpenFilesObj.openFile = function(file){
		var isOpen = findFile(file);
		if(isOpen.length === 0){ //file was not found in array of open files
			files.push(file);
			isOpen.push(files.length-1);
		}
		return changeActive(isOpen);
	}

	OpenFilesObj.files = function(){
		return files;
	}

	OpenFilesObj.setActive = function(file){
		return changeActive(file);
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