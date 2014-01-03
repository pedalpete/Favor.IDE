'use strict';
app.controller('FileSystemCtrl',function($scope, FileSystemModel, $timeout){
	var fs = require('fs');

	$scope.explorer=[];

	function return_files(tree){
		$scope.explorer=tree;
		console.log($scope.explorer);
	}

	$scope.openFile = function(){
			var tree = [tree_entry($scope.path.replace(/^.*[\\\/]/, ''),$scope.path,checkFile($scope.path))];	
			get_folder($scope.path, tree[0].children, 1);
			return_files(tree);
	};

	function checkFile(path){
		return fs.lstatSync(path).isDirectory();
	}
	
	function get_folder(path, tree, folder_get){
		fs.readdir(path, function(err,files){
			if (err) return console.log(err);

			files.forEach( function (file,idx){
				var file_path = path+'/'+file;
				var is_directory = checkFile(file_path);
				tree.push(tree_entry(file, file_path,is_directory));
				if(is_directory){
					get_folder(path+'/'+file, tree[idx].children , folder_get++);
				}
			});
		});
		folder_get--;
		return;
	}

	function tree_entry(entry,path,directory){
		return { label : entry,
				 path: path,
				 isDirectory: directory,
				 children: []}
	}

	$scope.tree_selected = function(branch){
		
		if(branch.isDirectory){
			$scope.$apply(function(){
				branch.expanded= !branch.expanded;
			});
		}
		if(!branch.isDirectory){
			alert('open path '+branch.path);
		}
		console.log(branch);
	}
});