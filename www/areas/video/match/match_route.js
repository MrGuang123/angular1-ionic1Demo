/**
* match.route Module
*
* Description
*/
angular.module('match.route', ['match.controller','match.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
      .state('tab.video.match',{
        url : '/match',
        views : {
          'video-match' : {
            templateUrl : 'areas/video/match/match.html',
            controller : 'MatchController'
          }
        }
      })

  }])