"use strict";

runBlock.$inject = ["$window", "$rootScope", "$location", "$http"];
MainCtrl.$inject = ["$scope", "$rootScope", "$state"];angular.module('OperationZeus', ['ngMaterial', 'ui.route', 'ngAnimate', 'angular-loading-bar']).config(["cfpLoadingBarProvider", function (cfpLoadingBarProvider) {
  /* @ngInject */
  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.latencyThreshold = 1;
}]);

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

angular.module('OperationZeus').run(runBlock);

/* @ngInject */
function runBlock($window, $rootScope, $location, $http) {
  $rootScope.fullyLoaded = true;
}

angular.module('OperationZeus').controller('MainCtrl', MainCtrl);

/* @ngInject */
function MainCtrl($scope, $rootScope, $state) {}
