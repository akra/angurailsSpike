'use strict';

describe('Service: tokenInjector', function () {

  // load the service's module
  beforeEach(module('angurailsApp'));

  // instantiate service
  var tokenInjector;
  beforeEach(inject(function (_tokenInjector_) {
    tokenInjector = _tokenInjector_;
  }));

  it('should do something', function () {
    expect(!!tokenInjector).toBe(true);
  });

});
