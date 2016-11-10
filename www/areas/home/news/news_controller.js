/**
* news.controller Module
*
* Description
*/
angular.module('news.controller', [])
  .controller('NewsController', function($scope,NewsFty){
    console.log(NewsFty)
     NewsFty.get('/testServlet')
      .then(function(data){
        $scope.items = data.data;
        console.log(data)
      })
  })