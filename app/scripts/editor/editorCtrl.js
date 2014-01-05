'use strict';

app.controller('EditorCtrl', function ($scope, FileSystemModel, FileModel) {
	$scope.aceOption={
		mode:'javascript'
	}

	$scope.fileContent="this is some test content";
	$scope.$on('fileContentChanged',function(){
		$scope.fileContent = FileModel.fileContent();
	});
});