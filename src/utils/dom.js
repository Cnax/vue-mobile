/**
 * 查找某个DOM元素上是否存在该类名
 * @param {HTMLElement} elem 需要查找的DOM元素
 * @param {String} cls 类名
 */
export const hasClass = (elem, cls) => {
  return elem.className.indexOf(cls) > -1
}

/**
 * 给DOM元素添加一个CSS class
 * @param {HTMLElement} elem 需要查找的DOM元素
 * @param {String} className 类名
 */
export const addClass = (elem, cls) => {
  const ele = elem
  if (!hasClass(ele, cls)) {
    const oldCls = ele.className
    ele.className = !oldCls ? cls : `${oldCls} ${cls}`
  }
}

/**
 * 删除DOM元素上的某个class类名
 * @param {HTMLElement} elem 需要查找的DOM元素
 * @param {String} cls 类名
 */
export const removeClass = (elem, cls) => {
  const ele = elem
  if (hasClass(ele, cls)) {
    const oldCls = ` ${ele.className} `
    const newCls = oldCls.replace(` ${cls} `, ' ')
    ele.className = newCls.trim()
  }
}

/**
 * 给DOM元素设置 style 属性
 * @param {HTMLElement} ele DOM元素
 * @param {String} prop 属性名称
 * @param {String} value 属性的值
 */
export const setStyle = (ele, prop, value) => {
  const tempEle = ele
  if (ele) {
    tempEle.style[prop] = value
  }
}

/**
   * 获取浏览器视口高度
   */
export const getViewPortHeight = () => {
  let e = window
  let a = 'inner'
  if (!('innerHeight' in window)) {
    a = 'client'
    e = document.documentElement || document.body
  }
  return e[`${a}Height`]
}

/**
 * 获取元素的ClientRect对象或者对象中的某个值
 * @param {HTMLElement} ele DOM节点元素
 * @param {String} [top|left|right|bottom|width|height]
 */
export const getRect = (ele, p) => {
  const domRect = ele.getBoundingClientRect()
  if (p) {
    return domRect[p]
  }
  return domRect
}
