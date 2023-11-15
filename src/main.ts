import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 关闭生产环境提示
Vue.config.productionTip = false

// 初始化根实例
new Vue({
  router,
  store,
  render: h => h(App) // 通过render方法把app渲染到#app节点
}).$mount('#app')
