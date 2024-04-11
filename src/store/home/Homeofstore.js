import { reqCategoryList, reqbannerList, reqfloorsList } from '@/api/index'

const state = {
    CategoryList: [],
    bannerLists: [],
    floorsLists: []
}
const mutations = {
    GetCategoryList(state, val) {
        // console.log(state.CategoryList, val)
        state.CategoryList = val
    },
    togetBNL(state, val) {
        state.bannerLists = val
    },
    togetFL(state, val) {
        state.floorsLists = val
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit('GetCategoryList', result.data)
        }
        // console.log(result.data)
    },
    async getbannerList({ commit }) {
        let bannerList = await reqbannerList()
        if (bannerList.code == 200) {
            commit('togetBNL', bannerList.data)
        }

    },
    async getfloorsList({ commit }) {
        let floorsList = await reqfloorsList()
        if (floorsList.code == 200) {
            commit('togetFL', floorsList.data)
        }
    }
}
const getters = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}