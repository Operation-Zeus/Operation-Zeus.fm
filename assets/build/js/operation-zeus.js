"use strict";

routeConfig.$inject = ["$stateProvider", "$locationProvider"];
runBlock.$inject = ["$window", "$rootScope", "$location", "$http", "$state", "$cookies"];
MainCtrl.$inject = ["$scope", "$rootScope", "$state"];angular.module('Operation-Zeus', ['ui.router', 'ngAudio', 'ngAnimate', 'ngMaterial', 'ngContextMenu', 'ngSanitize', 'ngCookies', 'angular-loading-bar', 'cfp.hotkeys']).config(routeConfig).config(["cfpLoadingBarProvider", function (cfpLoadingBarProvider) {
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

/* @ngInject */
function routeConfig($stateProvider, $locationProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/partials/home'
  }).state('welcome', {
    templateUrl: '/partials/welcome'
  });

  $locationProvider.html5Mode(true);
}

angular.module('Operation-Zeus').run(runBlock);

/* @ngInject */
function runBlock($window, $rootScope, $location, $http, $state, $cookies) {
  // Show welcome page if they've never been here before
  if ($cookies.get('hasSeenWelcomePage') != 1) {
    $state.go('welcome', {}, { notify: false });

    console.log('Going to welcome...');
    $rootScope.fullyLoaded = true;
  }
}

angular.module('Operation-Zeus').controller('MainCtrl', MainCtrl);

/* @ngInject */
function MainCtrl($scope, $rootScope, $state) {}
