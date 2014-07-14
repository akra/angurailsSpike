'use strict';

/**
 * @ngdoc service
 * @name angurailsApp.tokenHandler
 * @description
 * # tokenHandler
 * Factory in the angurailsApp.
 */
angular.module('angurailsApp')
  .factory('tokenHandler', function ($rootScope, $cookies) {
    // Service logic

    var token = null;

    var tokenHandler = {
      set: function (token, email) {
        $cookies.auth_token = token;
        $cookies.auth_email = email;
      },
      get: function () {
        if ($cookies.auth_token) {
          return {
            token: $cookies.auth_token,
            email: $cookies.auth_email
          }
        }
      },
      destroy: function() {
        delete $cookies.auth_token;
        $rootScope.$broadcast('event:unauthorized');
      }
    };

    // Public API here
    return tokenHandler;
  });
