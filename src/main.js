import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TreeTable from '@weilan/el-tree-table'
import './assets/css/common.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import { quillEditor } from 'vue-quill-editor' // 调用富文本编辑器
import 'quill/dist/quill.snow.css' // 富文本编辑器外部引用样式  三种样式三选一引入即可
//import 'quill/dist/quill.core.css'
//import 'quill/dist/quill.bubble.css'
import * as Quill from 'quill'; // 富文本基于quill



Vue.use(TreeTable)
Vue.use(ElementUI)
Vue.use(VXETable)

Vue.config.productionTip = false
 // 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
