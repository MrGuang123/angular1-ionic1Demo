/**
* tools.route Module
*
* Description
*/
angular.module('tools.route', ['tools.controller','tools.service'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.tools',{
        url : '/tools',
        views : {
          'tab-tools' : {
            templateUrl : 'areas/tools/tools.html',
            controller : 'ToolsController'
          }
        }
      })
  }])