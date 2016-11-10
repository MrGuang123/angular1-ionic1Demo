### 简单的实现一个LOL盒子的样式

***只包含www下面的文件，使用的时候首先你需要确保你的电脑中有node的环境，git，jdk，sdk，全局安装ionic和cordova，网上有大量的教程。***

1. 执行ionic start myapp 
2. 然后用我的www目录替换掉你的www目录
3. 执行 ionic platform add android
4. 执行 ionic build android
5. 手机和电脑用数据线链接，打开命令行adb devices查看设备是否链接
6. 链接正常执行ionic run android  这时候你就可以在你的手机中查看效果了
7. 也可以项目的根目录执行（www所在文件夹），执行ionic serve
8. 目前没有假数据，都是写死的，因为想用Java写接口，暂时没搞懂跨域解决方法，等以后弄明白之后会使用真正的接口来实现页面
9. 只有www下的文件是有用的，外面的那些bower.json和package.json改动，其他的文件都是和原来一样的，可以覆盖，也可以单独复制


### 在使用ionic是遇到跨域问题
> 我自己尝试简单的单间一个能返回数据的后台服务器，ionic的www目录我使用一个ionic的livereload 来当做一个简易的web服务器，在使用ionic serve  或者ionic build的时候会发生跨域的问题，参考[@donghongfei的分享](http://ionichina.com/topic/54f051698cbbaa7a56a49f98)解决了这个问题，记录一下，再次遇到就不怕。

##### 解决过程：我使用的是他介绍代理服务器方法
1. 将你的ionic.project 改造成这样（现在ionic.project改名为ionic.config.json）,path相当于proxyUrl的一个简称，也就是在页面中使用path的时候回去调用proxyUrl
```javascript
    {
      "name": "proxy-example",
      "app_id": "",
      "proxies": [
        {
          "path": "/api",//
          "proxyUrl": "http://cors.api.com/api"
        }
      ]
    }
```

2. 然后把你的API节点设置成angular constant，吧API节点指定为我们的代理url，这样就可以在需要的页面引入ApiEndpoint依赖，来使用这个模块
```javascript
    angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .constant('ApiEndpoint', {
      url: 'http://localhost:8100/api'
    })
```

3.设置angular的service
```javascript
    angular.module('starter.services', [])

    //NOTE: We are including the constant `ApiEndpoint` to be used here.
    .factory('Api', function($http, ApiEndpoint) {
      console.log('ApiEndpoint', ApiEndpoint)

      var getApiData = function() {
        return $http.get(ApiEndpoint.url + '/tasks')
          .then(function(data) {
            console.log('Got some data: ', data);
            return data;
          });
      };

      return {
        getApiData: getApiData
      };
    })
```

3. 通过gulp自动转化地址，修改gulpfile添加两个任务，同时需要先下载replace插件
    npm install replace --save
```javascript
var replace = require('replace');
var replaceFiles = ['./www/js/app.js'];

gulp.task('add-proxy', function() {
  return replace({
    regex: "http://cors.api.com/api",
    replacement: "http://localhost:8100/api",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})

gulp.task('remove-proxy', function() {
  return replace({
    regex: "http://localhost:8100/api",
    replacement: "http://cors.api.com/api",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})
```
4.上面的第二步是他的方法，放在我的项目中不方便，我就单独写了一个proxy文件，然后在需要的模块中引入，调用即可,但是url我这里需要使用服务器地址，而不是livereload地址，这个需要注意