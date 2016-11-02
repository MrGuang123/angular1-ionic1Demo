/**
* test.route Module
*
* Description
*/
angular.module('guidePage.route', ['guidePage.controller','guidePage.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('guidePage',{
        url : '/guidePage',
        templateUrl : 'areas/guidePage/guidePage.html',
        controller : 'GuidePageController'
      })

  }])