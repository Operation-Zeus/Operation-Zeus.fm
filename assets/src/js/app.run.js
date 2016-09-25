angular
  .module('OperationZeus')
  .run(runBlock);

/* @ngInject */
function runBlock($window, $rootScope, $location, $http) {
  $rootScope.fullyLoaded = true;
}
