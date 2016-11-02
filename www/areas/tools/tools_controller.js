/**
* account.controller Module
*
* Description
*/
angular.module('tools.controller', [])
  .controller('ToolsController', ['$scope', '$ionicActionSheet','$timeout','$ionicBackdrop','$rootScope',
    function($scope,$ionicActionSheet,$timeout,$ionicBackdrop,$rootScope){

    $scope.settings = {
    enableFriends: true
  };

  $scope.show = function() {
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '<b>分享他</b> ' },
        { text: '移动' }
      ],
      destructiveText: '删除',
      titleText: '更改你的文件',
      cancelText: '退出',
      cancel: function() {},
      buttonClicked: function() {
        return true;
      },
      cancelOnStateChange : true,
      cssClass : 'calm'
    })
  };


  $scope.action = function(){
    $ionicBackdrop.retain();
    $timeout(function(){
      $ionicBackdrop.release();
    },2000)
  }

  //在背景消失的时候执行的函数
  $scope.$on('backdrop.hidden',function(){

  });

  //在背景出现的时候执行的函数
  $scope.$on('backdrop.shown',function(){})

  }])