// 管理首页相关的数据

import {
  reqCategoryList,
  reqBannerList
} from '../../api';
const state = {
  categoryList: [],
  bannerList:[],
}
const mutations = {
  // 处理首页三级分类数据
  RECEIVE_CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList.splice(0,15)
  },
  //处理首页轮播
  RECEIVE_BANNER_LIST(state, bannerList) {
    state.bannerList = bannerList
  }
}
const actions = {
  // 获取首页三级分类数据
  async getCategoryList({ commit }) {
    const result = await reqCategoryList()
    if (result.code === 200) {
      const categoryList = result.data
      commit('RECEIVE_CATEGORY_LIST',categoryList)
    }
  },

  // 获取轮播数据
  async getBannerList({commit}) {
    const result = await reqBannerList()
    if (result.code === 200) {
      const bannerList = result.data
      commit('RECEIVE_BANNER_LIST', bannerList)
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