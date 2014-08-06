 'use strict';
 angular.module('angurailsApp')

 .config(function($stateProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
      })
      .state('secured',{
        url: '/secured',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve: {
          current_user: function (currentUser) {
            return currentUser.get();
          }
        }
      })
      .state('login',{
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
      })

 })

 .config(function($urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
 })
