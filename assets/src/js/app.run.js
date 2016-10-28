angular
  .module('Operation-Zeus')
  .run(runBlock);

/* @ngInject */
function runBlock($window, $rootScope, $location, $http, $state, $cookies) {
  if ($cookies.get('seenWelcome') !== 1) {
    $location.url('/welcome');

    $cookies.put('seenWelcome', 1, {
      expires: new Date(1e13) // A very long time (Sat Nov 20 2286 10:46:40) 
    });
  }

  $rootScope.fullyLoaded = true;
}
