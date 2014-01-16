'user strict';

app.controller('OpenFilesCtrl',function($scope, OpenFilesModel, FileModel){

	$scope.files = OpenFilesModel.files();
	$scope.activeFiles = OpenFilesModel.activeFiles();

	$scope.newFile = function(){
		FileModel.createFile();
		return;
	}

	$scope.sortableOptions = {
		items: "li:not(.disabled)"
	}

	$scope.setActive = function(click,file){
		OpenFilesModel.openFile(click,file);
	};

	$scope.favorFocusBindings = {
		'click': $scope.setActive,
		'ctrl-click': $scope.setActive
	}


	$scope.$on('fileContentChanged',function(event,multi,file){
		OpenFilesModel.openFile(multi,file);
	});

	$scope.$on('closeFile',function(event,file){
		OpenFilesModel.close(file);
	});

	$scope.$on('updateOpenFiles',function(event,files){
		$scope.files = files;
	});

	$scope.$on('updateActiveFiles',function(event,files){
		$scope.activeFiles = files;
		angular.forEach(files, function(file){
			if(file.ace){
				file.ace.env.onResize(true)
			}
		});
	});
});