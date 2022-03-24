//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//配置路由
export default new VueRouter({
    //配置路由
    routes:[       
        {
            path:"/home",
            component:Home,
            meta:{show:true,girl:'二哈'},
        },
        {
            path:"/search/:id",
            component:Search,
            meta:{show:true,girl:'二哈'},
            name:"search",
            //方法1 布尔值写法
            //props:true
            //方法2 对象写法
            //props:{a:1,b:2}
            //方法3 函数写法 可以params参数、query参数，通过props传递给路由组件
            
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false,girl:'二哈'}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false,girl:'二哈'}
        },
        {
            path:"/",
            redirect:"home"
        }    
    ]
})