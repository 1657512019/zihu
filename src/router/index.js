import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../../src/components/login/Login')
const regsiter = () => import('../../src/components/regsiter/Regsiter')
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        component: Home
    },
    {
        path: '/regsiter',
        component: regsiter
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
