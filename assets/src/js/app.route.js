/* @ngInject */
function routeConfig($stateProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home'
    })
    .state('welcome', {
      url: '/',
      templateUrl: '/partials/welcome'
    });
}
