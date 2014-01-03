'use strict';

describe('FileSystem', function () {

  beforeEach(angular.mock.module('favorIde'));
  
  beforeEach(angular.mock.inject(function($rootScope,$controller){
  	scope = $rootScope.$new();
  	$controller('FileSystemCtrl',{$scope:scope});
  })
  );
Z
  it('should get a list of files',function(){
  	console.log(scope.getFile);
   	expect(scope.getFile.length).toBe(1)
  });
});
