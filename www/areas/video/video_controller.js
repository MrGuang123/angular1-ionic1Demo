/**
* video.controller Module
*
* Description
*/
angular.module('video.controller', [])
  .controller('VideoController', function($scope,VideoFty){

    $scope.chats = VideoFty.all();
    $scope.remove = function(chat) {
      VideoFty.remove(chat);
    };


  })