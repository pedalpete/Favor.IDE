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

	function testD(click, parent_evt, e){
		alert('test')
	}
	$scope.keyBindings = {
		'ctrl-S': testD
	}

	$scope.clickBindings = {

	}
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

	$scope.$
});