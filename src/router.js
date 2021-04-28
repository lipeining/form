import VueRouter from 'vue-router'
// import store from '@/vuex/user'
import Index from './views/index'
import Login from './views/login'
import Design from './views/design'
import List from './views/list'
import Info from './views/info'

const routes = [
    { path: '/', name: 'index', component: Index, meta: {} },
    { path: '/login', name: 'login', component: Login, meta: { requireNotAuth: true } },
    { path: '/design', name: 'design', component: Design, meta: { requireAuth: true } },
    { path: '/list', name: 'list', component: List, meta: { requireAuth: true } },
    { path: '/info', name: 'info', component: Info, meta: { requireAuth: true } }
];

const router = new VueRouter({
    routes
});

// 登录中间验证，页面需要登录,而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
    // next();
    const user = JSON.parse(localStorage.getItem('user')) || {};
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (user.userId) {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else if (to.matched.some(record => record.meta.requireNotAuth)) {
        if (user.userId) {
            next({
                path: '/'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;