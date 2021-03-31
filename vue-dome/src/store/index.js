import Vue from 'vue';
import Vuex from 'vuex';
// 引入模块
import home from './modules/home.js';
import user from './modules/user.js';
import search from './modules/search.js';
import detail from './modules/detail.js';
import shopCart from './modules/shopCart.js';
import trade from './modules/trade.js';


Vue.use(Vuex)


const state ={}
const mutations ={}
const actions ={}
const getters = {}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    user,
    search,
    detail,
    shopCart,
    trade
  }
})