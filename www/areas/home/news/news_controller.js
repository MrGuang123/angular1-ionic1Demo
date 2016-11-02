/**
* news.controller Module
*
* Description
*/
angular.module('news.controller', [])
  .controller('NewsController', function($scope,NewsFty){
    console.log(NewsFty)
     NewsFty.get('/test/testServlet')
      .then(function(data){
        $scope.items = data;
      })
  })