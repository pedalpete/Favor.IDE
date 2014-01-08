'use static';

app.factory('FileModel',function($rootScope){
	
	var fileContent, fileName, filePath;

	FileObj = {};
	FileObj.openFile = function(path){
		fs.readFile(path,"utf-8",function(err,data){
			if(err) return console.log(data);
			fileContent = data;
			fileName = path.replace(/^.*[\\\/]/, '');
			filePath = path;
			$rootScope.$broadcast('fileContentChanged',FileObj.file());
		});
	}

	FileObj.file = function(){
		return {
			content: fileContent,
			name: fileName,
			path: filePath,
			active: false
		};
	}


	return FileObj;
});