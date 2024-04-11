import { reqAddressInfo, reqOrderInfo } from '@/api'
const state = {
    useraddinfo: [],
    orderinfo: {}
}
const mutations = {
    GETUSERADDINFO(state, val) {
        state.useraddinfo = val
    },
    GETORDERINFO(state, val) {
        state.orderinfo = val
    }
}
const actions = {
    async getuserAddressInfo({ commit }) {
        let result = await reqAddressInfo()
        // console.log(result);
        if (result.code == 200) {
            commit('GETUSERADDINFO', result.data)
        }

    },
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo()
        if (result.code == 200) {
            commit('GETORDERINFO', result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}