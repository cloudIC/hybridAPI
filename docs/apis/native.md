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
