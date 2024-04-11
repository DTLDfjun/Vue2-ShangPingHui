import VueRouter from "vue-router";
import Vue from "vue";

import routes from '@/router/routes'
import store from '@/store/index'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
let router = new VueRouter({

    routes,
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { y: 0 }
    }
});

router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userinfo.name
    //用户已经登录，携带了token
    if (token) {
        //如果登录之后还想去登录注册页面
        if (to.path == '/login' || to.path == 'register') {
            //原地跳转
            next('/home')
        } else {
            //如果登录了，而且有用户信息
            if (name) {
                //任意跳转
                next()
            } else {
                //如果登录了，而且没有用户信息
                try {
                    //派发action，获取用户信息
                    await store.dispatch("getuserinfo");
                    next()
                } catch (error) {
                    await store.dispatch('getlogout');
                    next('/login')
                    console.log('派发失败, 可能是token过期等等');
                    //派发失败（可能是token过期等等）
                    //派发退出登录的action，跳转到登录页
                    // await store.dispatch('getlogout')
                    // console.log(5678);
                    // next('/login')
                }
            }
        }
    } else {
        //如果没有token
        let topath = to.path
        if (topath.indexOf('/trade') != -1 || topath.indexOf('/pay') != -1 || topath.indexOf('/center') != -1) {
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
            next('/login?redirect=' + topath)
        } else {
            next()
        }

    }

})

export default router