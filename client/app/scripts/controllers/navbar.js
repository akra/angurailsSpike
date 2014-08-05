'use strict';

/**
 * @ngdoc function
 * @name angurailsApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the angurailsApp
 */
angular.module('angurailsApp')
  .controller('NavbarCtrl', function ($scope, gettextCatalog) {

    $scope.currentLanguage = gettextCatalog.currentLanguage;

    $scope.switchLanguage = function (lang) {
      gettextCatalog.setCurrentLanguage(lang);
      $scope.currentLanguage = gettextCatalog.currentLanguage;
    }

  });
