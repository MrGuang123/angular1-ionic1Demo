/**
* news.service Module
*
* Description
*/
angular.module('news.service', ['ApiProxy.constant'])
  .factory('NewsFty',function($http,ApiProxy){
    return {
      get : function(url){
        return $http({
          url : ApiProxy.url+url,
          method : 'GET'
        })
      }
    }
  })