//import search from '@/pages/search/index.vue'
//import login from '@/pages/login/index.vue'
//import home from '@/pages/home/home'
//import register from '@/pages/register/index.vue'
//import Detail from '@/pages/Detail'
//import addCartSuccess from '@/pages/AddCartSuccess'
//import ShopCart from '@/pages/ShopCart'
//import Trade from '@/pages/Trade'
//import Pay from '@/pages/Pay'
//import paysuccess from '@/pages/PaySuccess'
//import Center from '@/pages/Center'
//import myOrder from '@/pages/Center/myOrder'
//import groupOrder from '@/pages/Center/groupOrder'
export default [
    {
        path: '/',
        redirect: 'home'
    },
    {
        name: 'center',
        path: '/center',
        component: () => import('@/pages/Center'),
        children: [
            {
                path: 'myorder',
                component: () => import('@/pages/Center/myOrder')
            },
            {
                path: 'grouporder',
                component: () => import('@/pages/Center/groupOrder')
            },
            {
                path: '',
                redirect: 'myorder'
            }
        ]

    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        beforeEnter(to, from, next) {
            if (from.path == '/pay') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@/pages/home/home'),

    },
    {
        name: 'Pay',
        path: '/pay',
        component: () => import('@/pages/Pay'),
        beforeEnter(to, from, next) {
            if (from.path === '/trade') {
                next()
            } else {
                next('/trade')
            }
        }

    },
    {
        name: 'Trade',
        path: '/trade',
        component: () => import('@/pages/Trade'),
        beforeEnter(to, from, next) {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/shopcart')
            }
        }

    },
    {
        name: 'ShopCart',
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),

    },
    {
        name: 'addCartSuccess',
        path: '/addCartSuccess',
        component: () => import('@/pages/AddCartSuccess'),

    },
    {
        name: 'Detail',
        path: '/Detail/:skuid',
        component: () => import('@/pages/Detail'),

    },

    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('@/pages/search/index.vue')
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/pages/login/index.vue')
    },
    {
        name: 'Register',
        path: '/register',
        component: () => import('@/pages/register/index.vue')
    },
]