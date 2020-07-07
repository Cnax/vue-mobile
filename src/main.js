import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import '@/plugins/vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
