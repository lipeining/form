import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './vuex/user'

Vue.use(Vuex)
// process.env.Mock && require('./mock.js')
require('./mock.js')

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(formCreate)
Vue.use(FcDesigner)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
