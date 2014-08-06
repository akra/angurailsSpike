'use strict';

describe('Controller: ResourcedetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('angurailsApp'));

  var ResourcedetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResourcedetailsCtrl = $controller('ResourcedetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
