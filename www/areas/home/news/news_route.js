/**
* news.route Module
*
* Description
*/
angular.module('news.route', ['news.controller','news.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.home.news',{
        url:'/news',
        views : {
          'home-news':{
            templateUrl : 'areas/home/news/news.html',
            controller : 'NewsController'
          }
        }
      })

  }])