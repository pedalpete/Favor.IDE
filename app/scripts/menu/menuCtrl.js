'use strict';
app.controller('MenuCtrl',function($scope, FileSystemModel){
	$scope.folder = function(){
		if(FileSystemModel.tree_list().length==0){
			//nothing in the tree list, just open the file
			document.getElementById('openFile').click();
		} else {
			FileSystemModel.viewFolders();
		}
	}
});