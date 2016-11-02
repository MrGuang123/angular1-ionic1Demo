//总路由模块
angular.module('route', [
  'tabs.route','home.route','video.route','guidePage.route','detail.route','danList.route',
  'tools.route'])

.config(function($stateProvider, $urlRouterProvider) {

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/guidePage');

});
