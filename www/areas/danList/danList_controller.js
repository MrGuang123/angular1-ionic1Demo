/**
* danList.controller Module
*
* Description
*/
angular.module('danList.controller', [])
  .controller('DanListController',['$scope','$state','$ionicHistory',
    function($scope,$state,$ionicHistory){
      $scope.back = function(){
        $ionicHistory.goBack();
      }

      $scope.jump = function(type) {
        $state.go(type);
      }
  }])