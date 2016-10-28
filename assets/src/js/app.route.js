/* @ngInject */
function routeConfig($stateProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home'
    })
    .state('welcome', {
      url: '/welcome',
      templateUrl: '/partials/welcome'
    })
    .state('login', {
      templateUrl: '/partials/login'
    });
    
  $locationProvider.html5Mode(true);
}
