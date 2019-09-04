import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import UserSettings from './views/Dashboard/UserSettings.vue'
import ClientTable from './views/Dashboard/ClientTable.vue'
import AddClient from './views/Dashboard/AddClient.vue'
import ViewClient from './views/Dashboard/ViewClient.vue'
import User from './views/Dashboard/User.vue'
import Messages from './views/Dashboard/Messages.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login-sales',
            component: Login
        },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: User 
                },
                {
                    path: 'client-table',
                    name: 'clientTable',
                    component: ClientTable
                },
                {
                    path: 'add-client',
                    name: 'addClient',
                    component: AddClient
                },
                {   
                    path: 'view-client',
                    name: 'viewClient',
                    component: ViewClient
                },
                {
                    path: 'messages',
                    name: 'messages',
                    component: Messages
                },
                {
                    path: 'user-settings',
                    name: 'settings',
                    component: UserSettings
                },
            ]
        }
    ]
})