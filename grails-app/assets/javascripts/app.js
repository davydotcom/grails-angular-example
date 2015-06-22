(function(){
  'use strict';

  var app = angular.module('five15', ['ui.router', 'ui.bootstrap', 'ngAnimate']);
  
  app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'Login/login.htm'
      });
  });

})();
