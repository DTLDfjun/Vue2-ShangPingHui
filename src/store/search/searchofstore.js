import { reqsearchList } from '@/api/index'
const state = {
    searchList: {}
}
const mutations = {
    Togetsearch(state, val) {
        state.searchList = val
    }
}
const actions = {
    async getsearchList({ commit }, params = {}) {
        let List = await reqsearchList(params)
        if (List.code = 200) {
            commit('Togetsearch', List.data)
        }
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    attrsList(state) {
        return state.searchList.attrsList
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}