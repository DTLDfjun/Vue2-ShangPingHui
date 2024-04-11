import { reqdetailInfo, reqAddOrUpdateShopCart } from '@/api/index'
import { getUUID } from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    uuid_token: getUUID()
}
const mutations = {
    togetgoodInfo(state, val) {
        state.goodInfo = val
    }
}
const actions = {
    async getgoodInfo({ commit }, skuid) {
        let result = await reqdetailInfo(skuid)
        if (result.code == 200) {
            commit('togetgoodInfo', result.data)
        }
    },
    //加入购物车的||修改某一个产品的个数
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error("faile"));
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    skuInfo() {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}