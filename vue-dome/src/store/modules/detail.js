import {reqDetailInfo} from '../../api';


const state = {
  skuDetailInfo:{}  // 详情页数据
}
const mutations = {
  RECIVE_SKUDETAILINFO(state, skuDetailInfo) {
    state.skuDetailInfo = skuDetailInfo
  }
}
const actions = {
  async getSkuDetailInfo({ commit },skuId) {
    const result = await reqDetailInfo(skuId)
    if (result.code === 200) {
      commit('RECIVE_SKUDETAILINFO',result.data)
    }
  }
}
const getters = {  // 通过getter简化数据
  categoryView(state) {
    return state.skuDetailInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.skuDetailInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.skuDetailInfo.spuSaleAttrList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}