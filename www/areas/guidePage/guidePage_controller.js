/**
* guidePage.controller Module  引导页面控制器
*
* Description
*/
angular.module('guidePage.controller', [])
  .controller('GuidePageController', ['$scope','$state', function($scope,$state){
    console.log($state)
    var mySwiper = new Swiper('.swiper-container',{
      pagination : '.swiper-pagination',
      onSlideChangeEnd : function(swiper){
        var index = guideSlide.activeIndex + 1;
        if (index == 2 || index == 3){
          var item = $('#tips-' + index);
          if(item.hasClass('hidden')){
            item.removeClass('hidden');
            item.addClass('guide-show');
          }
        }
      }
    })

    // 跳转到首页面
    $scope.func_goHome=function(){
      $state.go("tab.home");
    }

  }])