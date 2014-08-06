 'use strict';
 angular.module('angurailsApp')

 .config(['growlNotificationsProvider',
   function (growlNotificationsProvider) {
     growlNotificationsProvider.ttl(10000);
   }
 ])
