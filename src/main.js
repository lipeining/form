import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
// import router from './router'


// process.env.Mock && require('./mock.js')
require('./mock.js')

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(formCreate)
Vue.use(FcDesigner)
Vue.config.productionTip = false

// import Design from './components/design'
// import List from './components/list'
// import Info from './components/info'

// const routes = [
//     { path: '/design', name: 'design', component: Design },
//     { path: '/list', name: 'list', component: List },
//     { path: '/info', name: 'info', component: Info }
// ];

// const router = new VueRouter({
//     routes
// });
new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
