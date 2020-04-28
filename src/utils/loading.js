// 使用element-ui的loading组件
import { Toast } from 'vant'

// loading实例
let loadingInstance = null
// 个数
let loadingCount = 0

// 关闭loading框
export const finishLoading = () => {
  loadingCount--
  if (loadingInstance && loadingCount === 0) {
    loadingInstance.clear()
    loadingInstance = null
  }
}

// 开启loading框
export const startLoading = ({
  text = '数据加载中...',
  spinner = 'circular',
  needLoading = true
} = {}) => {
  loadingCount++
  // 上一个请求的loading还存在，就不需要继续生成loading服务
  if (needLoading && !loadingInstance) {
    loadingInstance = Toast.loading({
      mask: true,
      message: text || '加载中...',
      duration: 0,
      loadingType: spinner
    })
  }
}
