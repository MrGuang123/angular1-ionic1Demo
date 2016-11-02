/**
* comment.route Module
*
* Description
*/
angular.module('comment.route', ['comment.controller','comment.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
      .state('tab.video.comment',{
        url : '/comment',
        views : {
          'video-comment' : {
            templateUrl : 'areas/video/comment/comment.html',
            controller : 'CommentController'
          }
        }
      })

  }])