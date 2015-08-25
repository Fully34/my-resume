
//===========================================================================//
                        /* ~~~ angular ~~~ */ 
//===========================================================================//

var resume = angular.module('resume', ['ngRoute', 'ngResource']);


//============================== routing ==============================//

resume.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl : '/templates/main',
      controller  : 'homeController'
    })
}); 


//============================== controllers ==============================//

resume.controller('homeController', function($scope) {

  $scope.test = {

    one : 1,
    two : 2,
    three : 3
  };
});
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
         