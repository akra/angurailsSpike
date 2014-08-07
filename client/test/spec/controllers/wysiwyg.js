'use strict';

describe('Controller: WysiwygCtrl', function () {

  // load the controller's module
  beforeEach(module('angurailsApp'));

  var WysiwygCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WysiwygCtrl = $controller('WysiwygCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
