import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Dashboard2 from './views/Dashboard2.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        {
            path: '/',
            name: 'login-sales',
            component: Login
        },
        {
            path: '/dashboard2',
            name: 'dashboard2',
            component: Dashboard2
        }
    ]
})