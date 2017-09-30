# 原生能力的扩展

## 获取当前网络状态
``` javascript
hybridAPI.networkType()
.then(status => {
  // Return [String] 'WIFI'/'4G'/'3G'/'2G'/'UNKNOWN'
})
```

## 获取指定数量的通讯录记录
``` javascript
hybridAPI.contactList(number)
.then(list => {
  // Return: [Object]
  // {
  //  '莉莉': ['18888888888', '17777777777'],
  //  'sofish': ['16666666666']
  // }
})
.catch(({ name, data }) => {
  // name: catch 状态
  // data: app 抛出的数据
})
```

## 查询应用是否安装（Android Only）
``` javascript
// packages [Array] 要查询应用的包名列表
hybridAPI.checkPackages(packages)
.then(response => {
  ...
})
.catch(() => {})
```

## 打开指定应用（Android Only）
``` javascript
// packageName [String] 要打开的应用包名
hybridAPI.openPackage(packageName)
```

## 扫码（Support: 7.22）
``` javascript
/* @param params {Object}
 * @param params.needResult {Number} 是否需要返回结果，可选值：0,1。
 * ** 0 代表对于扫描出的结果由 App 来进行后续操作（例如打开二维码中的 URL，跳转到 scheme）
 * ** 1 代表将扫描得出的结果返回给调用方
 * @param params.type {Array} 扫码类型，可选值 ['qrCode', 'barCode']
 * ** qrcode 二维码
 * ** barCode 条形码
 * @return {String} 扫码得到的结果
 */
hybridAPI.scanCode(params)
.then(response => {
  //
})
.catch(() => {})
```

## 退出确认（在点击返回时阻止）
``` javascript
/*
 * @param options {Object}
 * @param options.title {String} 弹窗标题
 * @param options.content {String} 弹窗内容
 * @param options.yes_text {String} 确认按钮文案
 * @param options.no_text {String} 取消按钮文案
 * @param options.yes_scheme {String} eleme scheme 为空则退出webview, 否则跳转scheme 对应页面
 * @param options.no_scheme {String} eleme scheme 为空则关闭对话框, 否则关闭对话框并进入相应页面
 * @return null
 */
hybridAPI.exitConfirm(options)
```
