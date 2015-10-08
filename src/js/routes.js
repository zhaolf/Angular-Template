'use strict';

/**
 * Route configuration for the App module.
 */
angular.module('App').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/home');

    // Application routes
    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html',
          controller:'homeCtrl'
      })
      .state('table', {
          url: '/table',
          templateUrl: 'templates/table.html',
          controller:'tableCtrl'
      });
  }
]);
