'use strict';

/**
 * @ngdoc function
 * @name angurailsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angurailsApp
 */
angular.module('angurailsApp')
  .controller('MainCtrl', function ($scope, $http, Article) {
    var vt = this;

    Article.getLatestFeed().then(function (data) {
      vt.articles = data;
    });
  });
