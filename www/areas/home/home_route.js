/**
* home.route Module
*
* Description
*/
angular.module('home.route', [
  'news.route','queAndAns.route','select.route','weal_img.route',
  'home.controller','home.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.home',{
        url : '/home',
        views : {
          'tab-home' : {
            templateUrl : 'areas/home/home.html',
            controller : 'HomeController'
          }
        }
      })

  }])