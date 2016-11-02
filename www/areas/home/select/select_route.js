/**
* select.route Module
*
* Description
*/
angular.module('select.route', ['select.controller','select.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.home.select',{
        url:'/select',
        views : {
          'home-select':{
            templateUrl : 'areas/home/select/select.html',
            controller : 'SelectController'
          }
        }
      })

  }])