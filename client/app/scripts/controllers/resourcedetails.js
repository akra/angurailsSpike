'use strict';

/**
 * @ngdoc function
 * @name angurailsApp.controller:ResourcedetailsCtrl
 * @description
 * # ResourcedetailsCtrl
 * Controller of the angurailsApp
 */
angular.module('angurailsApp')
  .controller('ResourceDetailsCtrl', function ($scope, Restangular, $stateParams) {
    $scope.details = Restangular.one('users', $stateParams.id).get().$object;
  });
