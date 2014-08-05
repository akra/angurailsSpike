'use strict';

/**
 * @ngdoc function
 * @name angurailsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angurailsApp
 */
angular.module('angurailsApp')
  .controller('LoginCtrl', function ($location, $scope, $http, tokenHandler, currentUser, growlNotifications) {

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
          growlNotifications.add('<b>Zostales zalogowany</b>', 'success');
          $location.path('/');
        } else {
          growlNotifications.add('<b>'+data.info+'</b>', 'error');
        }
      }).error(function () {
         $scope.user.errors = 'Something is wrong with the service. Please try again';
      });
    };

    $scope.logout = function () {
      tokenHandler.destroy();
      currentUser.destroy();
      growlNotifications.add('<b>Zostales wylogowany</b>', 'success');
    };

});
