'use strict';

/**
 * @ngdoc service
 * @name angurailsApp.currentUser
 * @description
 * # currentUser
 * Factory in the angurailsApp.
 */
angular.module('angurailsApp')
  .factory('currentUser', function ($http, $q) {
    // Service logic
    var user;

    var currentUser = {
      get: function () {
        var d = $q.defer();
        if(user){
          d.resolve(user);
        } else {
          $http.get('/api/users/current')
            .success(function (data) {
              d.resolve(data);
              user = data;
            });
        }
        return d.promise;
      },
      destroy: function() {
        user = undefined;
      }
    };

    return currentUser;

  });
