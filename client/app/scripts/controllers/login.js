'use strict';

/**
 * @ngdoc function
 * @name angurailsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angurailsApp
 */
angular.module('angurailsApp')
  .controller('LoginCtrl', function ($location, $scope, $http, tokenHandler, currentUser) {

    $scope.signup = function () {
      delete $scope.user.errors;
      $http({
        url: '/api/users',
        method: 'POST',
        data: {
          user: $scope.user
        }
      }).success(function (data) {
        tokenHandler.set(data.auth_token, $scope.user.email);
        $location.path('/');
      }).error(function (reason) {
        $scope.user.errors = reason.info;
      });
    };

    $scope.login = function () {
      delete $scope.user.errors;
      $http({
        url: '/api/users/sign_in',
        method: 'POST',
        data: {
          user: $scope.user
        }
      }).success(function (data) {
        if (data.success) {
          tokenHandler.set(data.data.auth_token, $scope.user.email);
          $location.path('/');
        } else {
          $scope.user.errors = data.info;
        }
      }).error(function (msg) {
         $scope.user.errors = 'Something is wrong with the service. Please try again';
      });
    };

    $scope.logout = function () {
      tokenHandler.destroy();
      currentUser.destroy();
    }

});
