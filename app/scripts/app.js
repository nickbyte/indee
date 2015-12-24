'use strict';
/**
 * @ngdoc overview
 * @name nickApp
 * @description
 * # nickApp
 *
 * Main module of the application.
 */
angular
  .module('nickApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ngMap',
    'ngStorage',
    'ui.timepicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
