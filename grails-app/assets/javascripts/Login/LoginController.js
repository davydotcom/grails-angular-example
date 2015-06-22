(function(){
  'use strict';
  
  var app = angular.module('five15');
  
  app.controller('LoginController', function($scope){
    $scope.doLogin = function doLogin(){
      $scope.error = 'I haven\'t added the login logic yet.';
    };
    
    $scope.clearError = function clearError(){
      $scope.error = '';
    };
  });
})();