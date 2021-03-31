import {
  getUserTempId, getToken,setToken,removeToken
} from '../../utils/userAbout.js';
import { reqUserInfo, reqUserLogin, reqUserLogout, reqUserRegister } from '../../api';


// 管理用户信息相关的数据
const state = {
  // getUserTempId() 获取临时标示id
  userTempId:getUserTempId(),   // 必须是这个名字
  token:getToken(),  // 先在localStroge中获取token
  userInfo:{}
}
const mutations = {
  RECEIVE_TOKEN(state, token) {
    state.token = token
  },

  // 处理用户信息
  RECEIVE_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },

  RESET_USERINFO(state) {
    // 包含用户信息和token
    state.userInfo = {}
    state.token = ""
  }
}
const actions = {
  //  注册
  async userRegister({ commit },userInfo) {
    const result = await reqUserRegister(userInfo)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },

  // 获取登录
  async userLogin({ commit },userInfo) {
    const result = await reqUserLogin(userInfo)
    if (result.code === 200) {
      commit('RECEIVE_TOKEN', result.data.token)
      setToken(result.data.token)
      // 这里要写返回值
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  
  // 获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo()
    if (result.code === 200) {
      commit('RECEIVE_USERINFO', result.data)
      return 'ok'
    } else {
      return Promise(new reject('failed'))
    }
  },

  // 
  async resetUserInfo({ commit }) {
    removeToken()  // 调用函数清除localStorage当中的token信息
    commit('RESET_USERINFO')
  },

  // 退出登录
  async userLogout({ commit }) {
    const result = await reqUserLogout()
    if (result.code === 200) {
      removeToken() // 调用函数清除localStorage当中的token信息
      commit('RESET_USERINFO')
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
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