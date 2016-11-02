/**
* disport.route Module
*
* Description
*/
angular.module('disport.route', ['disport.controller','disport.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
      .state('tab.video.disport',{
        url : '/disport',
        views : {
          'video-disport' : {
            templateUrl : 'areas/video/disport/disport.html',
            controller : 'DisportController'
          }
        }
      })

  }])