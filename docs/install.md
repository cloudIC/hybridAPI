# 安装与使用

## Install

### CDN
``` html
<!-- 引入 HybridAPI -->
<script src="//shadow.elemecdn.com/gh/eleme/hybridAPI@${version}/hybrid-api.js"></script>
```

### NPM
``` shell
$ npm install git+ssh://git@github.com/eleme/hybridAPI.git#${version}
```
将上面的`${version}`更改为你想要的版本。例如 `1.0.0`，具体 release 日志[请看这里](https://github.com/eleme/hybridAPI/releases)查看版本


## Useage

> `hybridAPI` 的每一个方法都返回了一个 `Promise` 对象

> **注意：** `hybridAPI` 的调用会有一层权限检测，在开始使用前，请保证你所开发的页面域名是以 `.elenet.me` `.ele.me` 结尾，否则无法正常工作。

``` javascript
hybridAPI[method]()
.then(response => {
  ...
})
.catch(error => {
  ...
})
```

## 一些约定

当某一个方法在当前环境下不支持的时候（比如 Android 不支持获取通讯录列表）会被 `rejected` 并且返回一个 `name` 为 `NOT_SUPPORT` 的状态
``` javascript
hybridAPI.concatList(10)
.catch(response => {
  // response.name === 'NOT_SUPPORT'
})
```

当使用中遇到权限问题而不能进行操作的时候会被 `rejected` 并且返回一个 `name` 为 `PERMISSION_DENIED` 的状态
``` javascript
hybridAPI.concatList(10)
.catch(response => {
  // response.name === 'PERMISSION_DENIED'
})
```

## 注意事项
- 目前暂没有支持对于失败情况的处理，比如扫码时未对相机进行「允许」类的授权操作。于是在交互方面会产生一定影响，功能已在规划中。
