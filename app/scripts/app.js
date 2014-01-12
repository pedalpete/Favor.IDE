'use strict';

var app = angular.module('favorIde', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.ace',
  'angularBootstrapNavTree',
  'ui.sortable',
  'ui.layout',
  'favor-keypress',
  'favor-focus'
]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
