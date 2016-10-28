angular
  .module('Operation-Zeus')
  .controller('HomePageCtrl', HomePageCtrl);

/* @ngInject */
function HomePageCtrl($scope, $rootScope) {
  $rootScope.pageTitle = 'Home';
}
