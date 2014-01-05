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

	$scope.$on('viewFoldersChanged',function(){
		$scope.foldersVisible = FileSystemModel.folderVisibility();
	});

	
});