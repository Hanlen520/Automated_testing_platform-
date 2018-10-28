import Vue from 'vue'
import Router from 'vue-router'
import api from './../api'
import Dashboard from '@/components/Dashboard'
import Main from '@/components/Main'

Vue.prototype.$api = api

Vue.use(Router)

let routes = [{
    path:'/',
    component: Main,
    hidden: true,
    children: [{
        path: '/',
        component:Dashboard,
        name:'首页'
    }]
}]

import {
    SystemRouter
} from './system'

for (let i in SystemRouter){
    routes.push(SystemRouter[i])
}

const router = new Router({
    routes: routes
})

export default router;