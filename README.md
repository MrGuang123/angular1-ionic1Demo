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