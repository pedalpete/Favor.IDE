'use strict';
app.controller('FileSystemCtrl',function($scope, FileSystemModel, FileModel){

	$scope.explorer=[];

	function returnFiles(tree){
		$scope.explorer=tree;
	}

	$scope.openFile = function(){
			var tree = FileSystemModel.get($scope.path);
			returnFiles(tree);
	};

	
	$scope.treeSelected = function(branch){
		
		if(branch.isDirectory){
			$scope.$apply(function(){
				branch.expanded= !branch.expanded;
			});
		}
		if(!branch.isDirectory){
			FileModel.openFile(branch.path);
		}
	}

	$scope.fileSaveAs = function(){
		FileSystemModel.saveFile($scope.savePath, $scope.fileToSave);
		$scope.savePath='';
		$scope.fileToSave='';
	}
	$scope.$on('saveAs', function(event,file){
		$scope.fileToSave = file;
		document.getElementById('saveFile').click();
	});


	$scope.$on('viewFoldersChanged',function(){
		$scope.foldersVisible = FileSystemModel.folderVisibility();
	});

});