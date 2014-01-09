'use static';

app.factory('FileModel',function($rootScope){
	
	var fileMeta;

	FileObj = {};
	FileObj.openFile = function(path){
		fs.readFile(path,"utf-8",function(err,data){
			if(err) return console.log(data);
			fileMeta = createFileMeta(path,data);
			$rootScope.$broadcast('fileContentChanged',FileObj.file());
		});
	}

	FileObj.createFile = function(content){
		fileMeta = createFileMeta('', content || '');
		fileMeta.created_new = new Date().getTime();
		$rootScope.$broadcast('fileContentChanged',FileObj.file());
		return;
	}

	function createFileMeta(path,data){
			return {
					content: data,
					last_save: data,
					name: path.replace(/^.*[\\\/]/, ''),
					path: path,
					active: false,
					opened_at: getTime()
				}
	}

	function getTime(){
		return new Date().setHours(0,0,0,0);
	}

	FileObj.file = function(){
		return fileMeta;
	}

	FileObj.ace = function(_ace){
		if(!fileMeta){
			fileMeta = createFileMeta('','');
		}
		fileMeta.ace = _ace;
		return;
	}

	return FileObj;
});