'use strict';
app.controller('DeviceCtrl', function ($scope, DeviceModel) {
	$scope.devices = [];
	DeviceModel.on('init', function(connections){
		$scope.devices = connections.connection_list;
	});
});