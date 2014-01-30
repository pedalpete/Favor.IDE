var config = {	
	"bootstrap":{
		"name": "bootstrap",
		"version":"3.0.0",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"vendor/bootflat/bootstrap/bootstrap.min.css"
		],
		"dependencies" :{
		}
	},
	"font-awesome":{
		"name": "font-awesome",
		"version":"4.0.0",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"vendor/bootflat/css/font-awesome.min.css"
		],
		"dependencies" :{
		}
	},
	"bootflat":{
		"name": "bootflat",
		"version":"1.0.1",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"vendor/bootflat/css/bootflat.css"
		],
		"dependencies" :{
			"bootstrap": ">=3.0.x",
			"font-awesome" :">=4.0.x"
		}
	},
	"bootflat-extensions":{
		"name": "bootflat-extensions",
		"version":"1.0.1",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"vendor/bootflat/css/bootflat-extensions.css"
		],
		"dependencies" :{
			"bootflat": ">=1.0.x",
		}
	},
	"bootflat-square":{
		"name": "bootflat-square",
		"version":"1.0.1",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"vendor/bootflat/css/bootflat-square.css"
		],
		"dependencies" :{
			"bootflat": ">=1.0.x",
		}
	},
	"favor-flex-layout":{
		"name": "favor-flex-layout",
		"version":"1.0.1",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"favor-packages/favor-layout/favorFlexLayout.css"
		],
		"dependencies" :{
		}
	},
	"jquery": {
		"name":"jquery",
		"version":"2.0.3",
		"jsPaths":[
			"bower_components/jquery/jquery.min.js"
		],
		"dependencies": {
		}
	},
	"jquery-ui":{
		"name": "jquery-ui",
		"version":"1.10.3",
		"jsPaths":[
			"bower_components/jquery-ui/ui/minified/jquery-ui.min.js"
		],
		"dependencies":{

		}
	},
	"angular":{
		"name": "angular.js",
		"version":"1.2.5",
		"jsPaths":[
			"bower_components/angular/angular.js"
		],
		"dependencies":{
		}
	},
	"ngRoute":{
		"name":"angular-route",
		"version":"1.2.5",
		"jsPaths":[
			"bower_components/angular-route/angular-route.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
	"ngResource":{
		"name": "angular-resource",
		"version":"1.2.5",
		"jsPaths":[
			"bower_components/angular-resource/angular-resource.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
	"ngSanitize":{
		"name": "angular-sanitize",
		"version":"1.2.5",
		"jsPaths":[
			"bower_components/angular-sanitize/angular-sanitize.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
	"ui.sortable":{
		"name": "ui-sortable",
		"version":"0.0.1",
		"jsPaths":[
			"bower_components/angular-ui-sortable/src/sortable.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
	"ui.ace":{
		"name": "ui.ace",
		"version":"0.0.1",
		"jsPaths":[
			"bower_components/angular-ui-ace/ui-ace.js"
		],
		"dependencies":{
			"angular":">=1.2.x",
			"ace": ">=1.0.x"
		},
		"angularModule":true
	},
	"ace": {
		"name": "ace",
		"version":"1.1.1",
		"jsPaths":[
		"bower_components/ace-builds/src-min-noconflict/ace.js"
		],
		"dependencies":{

		}
	},
	"favorIde": {
		"name":"favor.ide",
		"version":"0.0.1",
		"jsPaths":[
			"scripts/app.js"
		],
		"cssPaths":[
			"styles/main.css",
			"styles/components.css"
		],
		"dependencies":{
			"angular":">=1.2.x",
			"jquery":">=2.x.x",
			"jquery-ui":">=1.10.x"
		}
	},
	"favor-keypress": {
		"name":"favor-keypress",
		"version":"0.0.1",
		"jsPaths":[
			"scripts/keypress/keypressDirective.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
	"favor-focus":{
		"name": "favor-focus",
		"version":"0.0.1",
		"jsPaths":[
			"scripts/focus/focusDirective.js"
		],
		"dependencies":{
			"angular":">=1.2.x",
			"favor-keypress":">=0.x.x"
		},
		"angularModule":true
	},
	"Favor.FileSystemManager":{
		"name":"Favor.FilesystemManager",
		"version":"0.0.1",
		"jsPaths":[
			"favor-packages/Favor.FileSystemManager/dist/favorFileSystem.js",
		],
		"dependencies":{
			"angular":">=1.2.x"
        },
		"angularModule":true
	},
	"Favor.FileManager":{
		"name":"Favor.FileManager",
		"version":"0.0.1",
		"jsPaths":[
			"favor-packages/Favor.FileManager/dist/favorFileManager.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
    "Favor.Search":{
        "name":"Favor.Search",
        "version":"0.0.1",
        "jsPaths":[
            "favor-packages/Favor.Search/dist/favorSearch.js"
        ],
        "dependencies":{
            "angular":">=1.2.x"
        },
        "angularModule":true
    },
	"menu":{
		"name":"favor-menu",
		"version":"0.0.1",
		"jsPaths":[
			"scripts/menu/menuCtrl.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		}
	},
	"editor":{
		"name":"favor-editor",
		"version":"0.0.1",
		"jsPaths":[
			"scripts/editor/editorCtrl.js"
		],
		"dependencies":{
			"angular":">=1.2.x",
			"ace": ">=1.1.x",
			"ui.ace":">=0.0.1"
		}
	},
	"angularBootstrapNavTree":{
		"name":"angularBootstrapNavTree",
		"version":"0.1.6",
		"jsPaths":[
		"vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true

	},
	"favor.resizable":{
		"name":"favor-resizable",
		"version":"0.0.1",
		"jsPaths":[
			"favor-packages/favor-resizable/favorResizable.js"
		],
		"cssPaths":[
			"favor-packages/favor-resizable/favorResizable.css"
		],
		"dependencies":{
			"angular":">=1.2.x",
			"jquery":">=1.9.x"
		},
		"angularModule":true
	}
}
