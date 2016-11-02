/**
* detail.controller Module
*
* Description
*/
angular.module('detail.controller', [])
  .controller('DetailController',function($scope,$stateParams,VideoFty){
    console.log($stateParams)
    $scope.chat = VideoFty.get($stateParams.chatId);

  })