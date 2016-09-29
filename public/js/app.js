var app = angular.module('myApp', ['ui.router', 'myApp.controllers'])

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('home')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home.html',
      controller: 'mainController',
      controllerAs: 'main'
    })
    $locationProvider.html5Mode(true);
}])
