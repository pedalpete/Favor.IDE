'use static';

app.factory('FileModel',function($rootScope){
	
	var fileMeta;

	FileObj = {};
	FileObj.openFile = function(path){
		fs.readFile(path,"utf-8",function(err,data){
			if(err) return console.log(data);
			fileMeta = createFileMeta(path,data);
			$rootScope.$broadcast('fileContentChanged', false,FileObj.file());
		});
	}

	FileObj.createFile = function(content){
		fileMeta = createFileMeta('', content || '');
		fileMeta.created_new = getTime();
		$rootScope.$broadcast('fileContentChanged',false, FileObj.file());
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
		return new Date().getTime().toString();
	}

	function unbindKeybindings(command){
		var remove_bindings=['A','F','H'];
		for(var k in remove_bindings){
			var binding = remove_bindings[k];
			command.addCommands([{
				name: 'unBind-Ctrl-'+binding,
				bindKey: {
					win: 'Ctrl-'+binding,
					mac: 'Command-'+binding
				},
				exec: function(editor, line){
					return;
				},
				readOnly: true
			}]);
		}
	}


	FileObj.file = function(){
		return fileMeta;
	}

	FileObj.ace = function(_ace){
		if(!fileMeta){
			fileMeta = createFileMeta('','');
		}
		unbindKeybindings(_ace.commands);
		fileMeta.ace = _ace;
		return;
	}

	return FileObj;
});