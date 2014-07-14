'use strict';

/**
 * @ngdoc function
 * @name angurailsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angurailsApp
 */
angular.module('angurailsApp')
  .controller('AboutCtrl', function ($scope, current_user) {
    $scope.current_user = current_user;
  });
