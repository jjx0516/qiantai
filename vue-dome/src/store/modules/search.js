import { reqSearch } from '../../api';

const state = {
  searchList: {},
}
const mutations = {
  // 处理搜索页数据
  RECEIVE_SEARCH_LIST(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  // 获取搜索页数据
  async getSearchList({ commit }, searchParams) {
    // 删除searchParams中的空串和数组属性
    
    const result = await reqSearch(searchParams)
    if (result.code === 200) {
      // const searchList = result.data
      commit('RECEIVE_SEARCH_LIST', result.data)
    }
  }
}
const getters = {

  // 商品分页列表
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  // 品牌列表
  trademarkList(state) {
    return state.searchList.trademarkList || []
  },
  // 属性列表
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  // 总数量
  total(state) {
    return state.searchList.total || 0
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}