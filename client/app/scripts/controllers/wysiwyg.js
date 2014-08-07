'use strict';

/**
 * @ngdoc function
 * @name angurailsApp.controller:WysiwygCtrl
 * @description
 * # WysiwygCtrl
 * Controller of the angurailsApp
 */
angular.module('angurailsApp')
  .controller('WysiwygCtrl', function ($scope) {
    $scope.htmlVariable = '<h1>Czesc tobie</h1><p>takie piekne cos mozna tu pisac</p><ul><li>i robic</li><li>tz listy</li></ul>';
  });
