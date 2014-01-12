'use strict';

app.controller('EditorCtrl', function ($scope, FileModel, OpenFilesModel) {
	$scope.aceOption={
		mode:'javascript',
		onLoad: function(_ace){
			FileModel.ace(_ace);
		}
	}

	$scope.close = function(file){
		OpenFilesModel.close(file);
	}

	$scope.$on('fileContentChanged',function(event, file){
		$scope.content = file.content;
		if(!$scope.$$phase) return $scope.$apply(); //scope needs updating on opened files.
		return;
	});

	
});