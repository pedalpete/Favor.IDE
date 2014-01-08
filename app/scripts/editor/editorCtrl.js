'use strict';

app.controller('EditorCtrl', function ($scope, FileModel) {
	$scope.aceOption={
		mode:'javascript'
	}

	$scope.$on('fileContentChanged',function(event, file){
		$scope.$apply();
	});
});