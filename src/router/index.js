import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('../../src/components/login/Login')
const regsiter = () => import('../../src/components/regsiter/Regsiter')
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        component: login,
        meta:{title:"登录"}
    },
    {
        path: '/regsiter',
        component: regsiter,
        meta:{title:"注册"}
    },

]



const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to,from ,next)=>{
    document.title = to.matched[0].meta.title;
    next() //放行
    // console.log(to);
})
export default router
