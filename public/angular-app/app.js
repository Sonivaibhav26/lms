angular.module('lms', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');

  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/auth/login.html',
      controller: LoginCtrl,
    })
    .when('/dashboard', {
      templateUrl: 'angular-app/dashboard/dashboard.html',
      controller: MainCtrl,
    })
    .otherwise({
      redirectTo: '/'
    });
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}
