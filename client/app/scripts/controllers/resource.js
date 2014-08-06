'use strict';

/**
 * @ngdoc function
 * @name angurailsApp.controller:ResourceCtrl
 * @description
 * # ResourceCtrl
 * Controller of the angurailsApp
 */
angular.module('angurailsApp')
  .controller('ResourceCtrl', function ($scope, Restangular) {
    $scope.users = Restangular.all('users').getList().$object;
  });
