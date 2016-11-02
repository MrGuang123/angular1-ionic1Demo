/**
* detail.route Module
*
* Description
*/
angular.module('detail.route', ['detail.controller','detail.service','video.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.chat-detail',{
        url : '/chats/:chatId:chatAny',
        views : {
          'tab-chats' : {
            templateUrl : 'areas/detail/detail.html',
            controller : 'DetailController'
          }
        }
      })

  }])