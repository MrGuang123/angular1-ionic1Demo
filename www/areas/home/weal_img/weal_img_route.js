/**
* weal_img.route Module
*
* Description
*/
angular.module('weal_img.route', ['weal_img.controller','weal_img.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.home.weal_img',{
        url:'/weal_img',
        views : {
          'home-weal_img':{
            templateUrl : 'areas/home/weal_img/weal_img.html',
            controller : 'WealImgController'
          }
        }
      })

  }])