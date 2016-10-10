angular
  .module('Operation-Zeus')
  .run(runBlock);

/* @ngInject */
function runBlock($window, $rootScope, $location, $http, $state) {
  $rootScope.fullyLoaded = true;

  
}
