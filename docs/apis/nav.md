# 导航栏

## 配置导航栏样式
> 7.18 及以后版本支持

> 注意：`#RRGGBB` 不能省略 `#` 号

``` javascript
/**
  colorString: '#RRGGBB' 或 '#AARRGGBB'(AA 代表透明度，例如 07) 或 '#RRGGBB,#AARRGGBB' (表示渐变)
  colorOption: {
   from: colorString,  // 起始颜色，即滚动高度小于 triggerHeight 时的颜色
   to: colorString,    // 终止颜色，即滚动高度大于 triggerHeight 时的颜色
   solid: colorString, // 恒定颜色，`solid` 和 `from/to` 选其一
   direction: 0,       // 0: 从左到右渐变, 1: 从上到下渐变 (方向对文字颜色无效)
  }
*/

hybridAPI.setNav({
  // 是否沉浸。注意：沉浸后导航栏底下的 webview 不可点击。
  // 当 immersive 设置为 true 的时候，同时会默认将导航栏背景设置为透明。并且当 webview 向上滚动到一定距离，导航栏变为默认品牌背景色
  // 此时如果希望自定义，可设置 navBg 参数来进行覆盖
  immersive: [Boolean],

  // 这个滚动高度为分界线，在这以上取 `from` 颜色，以下取 `to` 颜色。
  triggerHeight: [Number],

  // 导航栏背景色
  navBg: colorString || colorOption,

  // 导航栏文字颜色
  navText: colorString || colorOption,

  // 系统状态栏文字颜色，可选值： 'black', 'white', 或下例对象
  statusText: {
    from: [Boolean], // true 为白色，false 为黑色
    to: [Boolean],  // true 为白色，false 为黑色
  },
})
```

## 获取状态栏和导航栏高度

``` javascript
/*
 * @return response {Object}
 * response.status_bar {String} 状态栏高度
 * response.nav_bar {String} 导航栏高度
 */
hybridAPI.getTopBarHeight()
.then(response => {
  ...
})
```
