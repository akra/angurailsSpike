 'use strict';
 angular.module('angurailsApp')

 .config(function ($stateProvider) {
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'views/main.html',
       controller: 'MainCtrl as main'
     })
     .state('secured', {
       url: '/secured',
       templateUrl: 'views/about.html',
       controller: 'AboutCtrl',
       resolve: {
         current_user: function (currentUser) {
           return currentUser.get();
         }
       }
     })
     .state('login', {
       url: '/login',
       templateUrl: '/views/login.html',
       controller: 'LoginCtrl'
     })
     .state('users', {
       url: '/users',
       templateUrl: '/views/users.html',
       controller: 'ResourceCtrl'
     })
     .state('users.details', {
       url: '/:id',
       templateUrl: '/views/users.details.html',
       controller: 'ResourceDetailsCtrl'
     })

 })

 .config(function ($urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
 })
