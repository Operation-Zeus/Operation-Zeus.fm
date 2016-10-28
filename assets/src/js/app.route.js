/* @ngInject */
function routeConfig($stateProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home',
      controller: HomePageCtrl
    })
    .state('welcome', {
      url: '/welcome',
      templateUrl: '/partials/welcome',
      controller: WelcomePageCtrl
    })
    .state('login', {
      templateUrl: '/partials/login'
    });

  $locationProvider.html5Mode(true);
}
