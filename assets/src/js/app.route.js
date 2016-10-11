/* @ngInject */
function routeConfig($stateProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home'
    })
    .state('welcome', {
      templateUrl: '/partials/welcome'
    });

  $locationProvider.html5Mode(true);
}
