'user strict';

app.controller('OpenFilesCtrl',function($scope, OpenFilesModel, FileModel){

	$scope.files = OpenFilesModel.files();


	$scope.newFile = function(){
		FileModel.createFile();
		return;
	}

	$scope.sortableOptions = {
		items: "li:not(.disabled)"
	}

	$scope.setActive = function(file){
		OpenFilesModel.openFile(file);
	};

	$scope.$on('fileContentChanged',function(event,file){
		OpenFilesModel.openFile(file);
	});

	$scope.$on('closeFile',function(event,file){
		OpenFilesModel.close(file);
	});


	$scope.$on('updateOpenFiles',function(event,files){
		$scope.files = files;
		$scope.$apply();
	});
});