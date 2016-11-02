/**
* news.service Module
*
* Description
*/
angular.module('news.service', [])
  .factory('NewsFty',function($http,globalVariable){
    return {
      get : function(url){
        return $http({
          url : globalVariable.SERVER_PATH+url,
          method : 'GET'
        })
      }
    }
  })