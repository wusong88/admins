import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TreeTable from '@weilan/el-tree-table'
import './assets/css/common.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(TreeTable)
Vue.use(ElementUI)
Vue.use(VXETable)

Vue.config.productionTip = false
 // 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal

new Vue({
  render: h => h(App),
}).$mount('#app')
