'use strict';

angular.module('devicesMock',[])
	.value('defaultJSON',{
	query:{
		count: 2,
	},
	results: {
		entry:[
			{title:'first'},
			{title:'second'}
		]
	}
});