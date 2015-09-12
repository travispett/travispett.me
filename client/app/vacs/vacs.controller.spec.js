'use strict';

describe('Controller: VacsCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var VacsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VacsCtrl = $controller('VacsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
