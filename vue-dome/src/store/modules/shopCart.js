import {
  reqAddOrUpdateCart, reqCartList, reqUpdateCartChecked, reqDeleteCart
} from '../../api';

const state = {
  shopCartList: {},
}
const mutations = {
  RECEIVE_SHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList
  },

}
const actions = {
  async addOrUpdateCart({commit}, {skuId,skuNum}) {
    const result = await reqAddOrUpdateCart(skuId, skuNum)
    // 如果和以下写法一样,那么这个异步函数返回的promise只有成功
    // if (result.code === 200) {
    //   return 'ok'
    // }else{
    //   return 'failed'
    // }

    // 下面的写法会让这个promise 有成功有失败
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },

  async getCartList({commit}) {
    const result = await reqCartList()
    if (result.code === 200) {
      commit('RECEIVE_SHOPCARTLIST', result.data)
    }
  },
  //获取商品选中状态
  async UpdateCartChecked({ commit },{skuId,isChecked}) {
    const result = await reqUpdateCartChecked(skuId, isChecked)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('falied'))
    }
  },
  async UpdateCartCheckedAll({ commit, dispatch, state }, isChecked) {
    let promises = []
    state.shopCartList[0].cartInfoList.forEach(item => {
      if (item.isChecked === isChecked) return
      let promise = dispatch('UpdateCartChecked', { skuId: item.skuId, isChecked: isChecked })
      promises.push(promise)
    })
    // promise.all 是一个方法(函数)
    // 参数:一个promise对象的数组
    // 返回值:一个新的promise对象
    // 新的promise对象的状态是成功还是失败:
      // 如果promise对象的数组当中有一个失败,那么状态就是失败,失败的原因就是第一个promise的原因
      // 如果promise对象的数组当中没有失败,那么状态就是成功,成功的结果是所有的promise成功的结果组成的数组 
    return Promise.all(promises)
  },
  async deleteCart({ commit }, skuId) {
    const result = await reqDeleteCart(skuId)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('falied'))
    }
  },
  async deleteCartAll({ commit, dispatch, state }) {
    let promises = []
    state.shopCartList[0].cartInfoList.forEach(item => {
      if (!item.isChecked) return
      let promise = dispatch('deleteCart', item.skuId)
      promises.push(promise)
    })
    return Promise.all(promises)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}