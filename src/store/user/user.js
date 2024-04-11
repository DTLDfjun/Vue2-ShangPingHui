import { reqGetcode, reqUserRegister, reqUserLogin, reqGetUserInfo, reqlogout } from '@/api'
import { settoken, gettoken, removetoken } from '@/utils/token'
const state = {
    code: '',
    token: gettoken(),
    userinfo: {}
}
const mutations = {
    togetcodes(state, val) {
        state.code = val
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, val) {
        state.userinfo = val
    },
    CLEAR(state) {
        state.token = '',
            state.userinfo = {},
            removetoken();
    }
}
const actions = {
    async getcodes({ commit }, phone) {
        let result = await reqGetcode(phone)
        if (result.code == 200) {
            // console.log(result);
            commit('togetcodes', result.data)
            return 'OK'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            console.log(result);
        } else {
            console.log(result);
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        if (result.code == 200) {
            //用户已经登录成功且获取到token
            commit("USERLOGIN", result.data.token);
            //持久化存储token
            settoken(result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async getuserinfo({ commit }) {
        let result = await reqGetUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async getlogout({ commit }) {
        let result = await reqlogout()
        if (result.code == 200) {
            console.log(result);
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
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