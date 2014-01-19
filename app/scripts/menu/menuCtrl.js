'use strict';
app.controller('MenuCtrl',function($scope, FavorFileSystemModel){
	$scope.folder = function(){
		if(FavorFileSystemModel.tree_list().length==0){
			//nothing in the tree list, just open the file
			document.getElementById('openFile').click();
		} else {
			FavorFileSystemModel.viewFolders();
		}
	}
});