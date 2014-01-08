'user strict';

app.controller('OpenFilesCtrl',function($scope,OpenFilesModel, FileModel){

	$scope.files = [{active:true}];

	$scope.$on('fileContentChanged',function(event,file){
		openFile(file);
	});

	$scope.setActive = function(file){
		changeActive(findFile(file));
	};


	function checkFile(file){
		removeActive(file,openFile);
	}

	function changeActive(setActive){ // remove active files and set new active files
		angular.forEach($scope.files, function(a){
			a.active=false;
		});
		angular.forEach(setActive, function(i){
			$scope.files[i].active=true;
		});
		return;
	}

	function findFile(file){
		return $.map($scope.files, function(f,i){
			if(f.path === file.path){
				return i;
			};
		});
	}

	function openFile(file){
		console.log(file);
		var isOpen = findFile(file);

		if(isOpen.length == 0){ //file was not found in array of open files
			$scope.files.push(file);
			isOpen.push($scope.files.length-1);
		}
		changeActive(isOpen);
	}


});