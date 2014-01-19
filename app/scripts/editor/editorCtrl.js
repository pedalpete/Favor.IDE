'use strict';

app.controller('EditorCtrl', function ($scope, FavorFileModel, FavorOpenFilesModel) {
	$scope.aceOption={
		mode:'javascript',
		onLoad: function(_ace){
			FavorFileModel.ace(_ace);
		}
	}

	$scope.close = function(file){
		FavorOpenFilesModel.close(file);
	}

	$scope.$on('ace_refresh',function(){
		console.log(this);
	});
	
	$scope.$on('fileContentChanged',function(event, file){
		$scope.content = file.content;
		if(!$scope.$$phase) return $scope.$apply(); //scope needs updating on opened files.
		return;
	});

	
});