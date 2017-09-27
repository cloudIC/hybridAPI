import { invokeMethod } from '../util'

const handleOption = option => {
  if (typeof option === 'string') {
    return { solid: option }
  }
  return option
}

const immersiveMode = (immersive, navBg = {}) => {
  if (immersive !== true) return

  invokeMethod('setNavBgColor', Object.assign({
    from: '#00ffffff',
    to: '#00aaff,#0085ff'
  }, navBg))
}

export default ({ immersive, statusText, navBg, navText, triggerHeight }) => {
  if (immersive !== undefined) {
    invokeMethod('setImmersiveMode', immersive)
    immersiveMode(immersive, navBg)
  }
  if (statusText !== undefined) {
    invokeMethod('setLightStatusBar', {
      solid: statusText === 'white'
    })
  }
  if (navBg !== undefined) {
    invokeMethod('setNavBgColor', handleOption(navBg))
  }
  if (navText !== undefined) {
    invokeMethod('setNavTextColor', handleOption(navText))
  }
  if (triggerHeight !== undefined) {
    invokeMethod('setTriggerHeight', triggerHeight)
  }

  return new Promise((resolve) => {
    resolve()
  })
}
