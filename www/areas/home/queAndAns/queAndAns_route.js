/**
* queAndAns.route Module
*
* Description
*/
angular.module('queAndAns.route', ['queAndAns.controller','queAndAns.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.home.queAndAns',{
        url:'/queAndAns',
        views : {
          'home-queAndAns':{
            templateUrl : 'areas/home/queAndAns/queAndAns.html',
            controller : 'QueAndAnsController'
          }
        }
      })

  }])