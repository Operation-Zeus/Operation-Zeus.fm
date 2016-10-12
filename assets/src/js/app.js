angular.module('Operation-Zeus', [
  'ui.router',
  'ngAudio',
  'ngAnimate',
  'ngMaterial',
  'ngContextMenu',
  'ngSanitize',
  'ngCookies',
  'angular-loading-bar',
  'cfp.hotkeys'
])
.config(routeConfig)
.config(function (cfpLoadingBarProvider) {
  /* @ngInject */
  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.latencyThreshold = 1;
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
