# Native 收银台

> 在唤起 Native 收银台前，我们需要先进行落单操作。然后将一些落单信息提供给 Native，Native 会根据这些信息来请求支付获取支付情景。支付完成 / 取消 / 失败时都会回传给 H5 相应状态。

``` js
/**
 * @param {Object} params app scheme 参数
 * @param {Number} params.merchantId 支付的 merchant id
 * @param {Number} params.merchantOrderNo 落单后的 order number
 * @param {String=} params.eventName app 回调时发送给 webView 的事件名
 * @param {Function} params.action 接收 app 回调的函数
 * action 可获得的参数：{ merchantId: 1, merchantOrderNo: 'xxx', status: 'success' || 'failed' }
 * @param {String=} params.x_shard 自定义的多活 x-shard 值
 */

hybridAPI.pay({
  merchantId: 'merchant id',
  merchantOrderNo: 'order number',
  xShard: 'the value of shard id',
})
.then(response => {
  // 见 Response 结构
})
.catch(error => {
  // 见 Error 结构
})
```

## Response 结构
``` javascript
{
  merchantId: '',
  merchantOrderNo: '',
  status: 'success'
}
```

## Error 结构
``` javascript
{
  // 'NOT_SUPPORT': 当前版本不支持 Native 支付 | 'CANCEL': 用户取消支付 | 'FAILURE': 支付失败
  name: [String],
  data: [Response]
}
```
