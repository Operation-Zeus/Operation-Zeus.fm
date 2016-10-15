angular
  .module('Operation-Zeus')
  .run(runBlock);

/* @ngInject */
function runBlock($window, $rootScope, $location, $http, $state, $cookies) {
  // TODO: Show a welcome page if they've never been here before

  $rootScope.fullyLoaded = true;
}
