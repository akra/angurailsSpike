 'use strict';
 angular.module('angurailsApp')

  .config(function ($httpProvider) {
    var interceptor = ['$rootScope', '$location', '$q',
      function ($scope, $location, $q) {
        var success = function (resp) {
            return resp;
          },
          err = function (resp) {
            if (resp.status === 401) {
              var d = $q.defer();
              $scope.$broadcast('event:unauthorized');
              return d.promise;
            };
            return $q.reject(resp);
          };
        return function (promise) {
          return promise.then(success, err);
        }
      }
    ];
    $httpProvider.responseInterceptors.push(interceptor);
  })

  .run(function ($rootScope, $http, $location, growlNotifications) {
    $rootScope.$on('event:unauthorized', function (evt) {
      growlNotifications.add('<b>Brak autoryzacji</b> zaloguj sie aby uzyskać dostęp do tego zasobu', 'error');
      $location.path('/login');
    })
  })

  .run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('pl');
  });
