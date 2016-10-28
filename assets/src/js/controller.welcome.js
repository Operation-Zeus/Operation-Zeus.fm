angular
  .module('Operation-Zeus')
  .controller('WelcomePageCtrl', WelcomePageCtrl);

/* @ngInject */
function WelcomePageCtrl($scope, $rootScope) {
  $rootScope.pageTitle = 'Welcome';
}
