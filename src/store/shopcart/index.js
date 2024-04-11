import { reqCartList, reqDeleteCattById, reqUpdateCheckedByid } from '@/api/index'

const state = {
    CartList: []
}
const mutations = {
    togetCartList(state, val) {
        state.CartList = val
    }
}
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('togetCartList', result.data)
        }
        // console.log(result);
    },
    async DeletdeCartById({ commit }, skuid) {
        let result = await reqDeleteCattById(skuid)
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    deldeteHaveChecked({ dispatch, getters }) {
        let promisearr = []
        getters.cartInfoList.forEach(item => {
            let promiseAll = item.isChecked == '1' ? dispatch('DeletdeCartById', item.skuId) : ''
            promisearr.push(promiseAll)
        });
        return Promise.all(promisearr)

    },
    updateALLCartInfoChecked({ dispatch, getters }, isChecked) {
        let promisearr = []
        getters.cartInfoList.forEach(item => {
            let promiseAll = dispatch('updateCheckedById', { skuId: item.skuId, isChecked: isChecked })
            promisearr.push(promiseAll)
        })
        return Promise.all(promisearr)
    }
}
const getters = {
    cartInfoList(state) {
        let temp = state.CartList[0] || {}
        return temp.cartInfoList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}