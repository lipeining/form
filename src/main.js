import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'

Vue.use(ElementUI)
Vue.use(formCreate)
Vue.use(FcDesigner)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
