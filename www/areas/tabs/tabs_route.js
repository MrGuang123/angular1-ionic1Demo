/**
* tabs.route Module
*
* Description
*/
angular.module('tabs.route', ['tabs.controller','tabs.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab',{
        url:'/tab',
        abstract:true,
        templateUrl : 'areas/tabs/tabs.html',
        controller : 'TabsController'
      })

  }])