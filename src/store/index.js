import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from '@/store/home/Homeofstore'
import user from '@/store/user/user'
import search from '@/store/search/searchofstore'
import detail from '@/store/detail/index'
import shopcart from '@/store/shopcart'
import trade from '@/store/trade'
export default new Vuex.Store({
    modules: {
        home,
        user,
        search,
        detail,
        shopcart,
        trade
    }
})