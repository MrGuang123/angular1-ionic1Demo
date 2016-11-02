/**
* danList.route Module
*
* Description
*/
angular.module('danList.route', ['danList.controller','danList.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
      .state('danList',{
        url : '/danList',
        templateUrl : '/areas/danList/danList.html',
        controller : 'DanListController'
      })

  }])