// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

//ElementUI
import ElementUI from 'element-ui'

import './assets/theme/element-#409eff/index.css'

import 'font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false

Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.$axios = axios
axios.interceptors.response.use(res => {
    if (!res.data)
        return res
    if (!res.data.errorCode || res.data.errorCode != 302)
        return res
    sessionStorage.removeItem('user')
    location.reload()
    return res
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }

})