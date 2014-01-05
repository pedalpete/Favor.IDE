'use static';

app.factory('FileModel',function($rootScope){
	
	var fileContent = '';
	FileObj = {};
	FileObj.openFile = function(path){
		fs.readFile(path,"utf-8",function(err,data){
			if(err) return console.log(data);
			fileContent = data;
			$rootScope.$broadcast('fileContentChanged');
		});
	}

	FileObj.fileContent = function(){
		return fileContent;
	}

	return FileObj;
});