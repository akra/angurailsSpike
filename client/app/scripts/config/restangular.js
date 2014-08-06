 'use strict';
 angular.module('angurailsApp')

  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
  })
