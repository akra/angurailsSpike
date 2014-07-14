'use strict';

/**
 * @ngdoc service
 * @name angurailsApp.tokenInjector
 * @description
 * # tokenInjector
 * Factory in the angurailsApp.
 */
angular.module('angurailsApp')
  .factory('tokenInjector', function (tokenHandler) {
    // Service logic

    var tokenInjector = {
      request: function (config) {
        var auth = tokenHandler.get()
        if (auth) {
          config.headers['X-Auth-Token'] = auth.token;
          config.headers['X-Auth-Email'] = auth.email;
        }
        return config;
      }
    };
    return tokenInjector;

  })
  .config(function ($httpProvider) {
     $httpProvider.interceptors.push('tokenInjector');
  })
