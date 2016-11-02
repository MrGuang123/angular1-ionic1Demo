/**
* video.route Module
*
* Description
*/
angular.module('video.route', [
  'comment.route','disport.route','match.route',
  'video.controller','video.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.video',{
        url : '/video',
        views : {
          'tab-video' : {
            templateUrl : 'areas/video/video.html',
            controller : 'VideoController'
          }
        }
      })

  }])