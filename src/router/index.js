// 配置路由
import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import MyHome from '@/pages/Home'
import MySearch from '@/pages/Search'
import MyRegister from '@/pages/Register'
import MyLogin from '@/pages/Login'

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: MyHome,
            meta:{show:true}
        },
        {
            path: "/search/:keyword",
            component: MySearch,
            meta:{show:true},
            name:'search'
        },
        {
            path: "/register",
            component: MyRegister,
            meta:{show:false}
        },
        {
            path: "/login",
            component: MyLogin,
            meta:{show:false}
        },
        // 重定向
        {
            path: "*",
            component: MyHome
        }
    ]
})