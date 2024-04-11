import requests from './request'
import mockrequests from './mockrequest'

export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

export const reqbannerList = () => {
    return mockrequests({ url: '/banner', method: 'get' })
}

export const reqfloorsList = () => {
    return mockrequests({ url: '/floors', method: 'get' })
}

export const reqsearchList = (params) => {
    return requests({
        url: 'list',
        method: 'post',
        data: params
    })
}

//    /api/item/{ skuId }
export const reqdetailInfo = (skuId) => {
    return requests({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}

export const reqCartList = () => {
    return requests({
        url: '/cart/cartList',
        method: 'get'
    })
}

export const reqDeleteCattById = (skuId) => {
    return requests({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

///api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedByid = (skuId, isChecked) => {
    return requests({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}

//验证码
export const reqGetcode = (phone) => {
    return requests({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get'
    })
}

//注册
//url:/api/user/passport/register  method:post    phone code password
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });

//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get 
export const reqGetUserInfo = () => {
    return requests({
        url: '/user/passport/auth/getUserInfo',
        method: 'get'
    })
};

//退出登录
//URL:/api/user/passport/logout  get
export const reqlogout = () => {
    return requests({
        url: '/user/passport/logout',
        method: 'get'
    })
}

//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = () => {
    return requests({
        url: '/user/userAddress/auth/findUserAddressList',
        method: 'get'
    })
}

//获取商品清单
//URL:/api/order/auth/trade   method:get
export const reqOrderInfo = () => {
    return requests({
        url: '/order/auth/trade',
        method: 'get'
    })
}

//提交订单的接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post
export const reqSummitOrder = (tradeNo, data) => {
    return requests({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        data,
        method: 'post'
    })
}

//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId) => {
    return requests({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get'
    })
}

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' });

//获取个人中心的数据
//api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });