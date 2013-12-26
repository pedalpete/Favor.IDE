'use strict';

describe('DeviceCtrl', function () {

  beforeEach(module('favorIde'));
  var DeviceCtrl,scope, DeviceModel, devicesMock;

  beforeEach(function(){
    devicesMock = {
            query:{
              count: 2,
            },
            results: {
              entry:[
                {title:'first'},
                {title:'second'}
              ]
            }
          };
  });
  beforeEach(inject(function($controller, $rootScope, DeviceModel){
    console.log(DeviceModel.hasOwnProperty('on'));
    DeviceModel.on('init').respond(devicesMock);

    scope = $rootScope.$new();
    DeviceCtrl = $controller('DeviceCtrl',{
      $scope: scope
    });
  }));

  it('should have a list of devices',function(){
    expect(scope.devices.length.toBe(1));
  });
});
