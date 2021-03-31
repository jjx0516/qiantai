// 定义接口请求函数
import ajax from './ajax';

// 获取首页三级分类  /api/product/getBaseCategoryList
export function reqCategoryList() {
  // return ajax.get('/product/getBaseCategoryList')  // 发不带参数的get请求
  return ajax({
    url: '/product/getBaseCategoryList',
    method:"get"
  })
}

// 获取首页广告轮播
export const reqBannerList = () => ajax('/cms/banner')

// 获取搜索search分页
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)

// 获取详情页数据
///api/item/{ skuId }  get
export const reqDetailInfo = (skuId) =>{
  return ajax({
    url: `/item/${ skuId }`,
    method:"get"
  })
}

// 添加购物车(修改购物车商品的数量)
// /api/cart/addToCart/{ skuId }/{ skuNum }  post
export const reqAddOrUpdateCart = (skuId, skuNum) => {
  return ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method:'post'
  })
}

// 获取购物车列表
// /api/cart/cartList   GET

export const reqCartList = () => {
  return ajax({
    url: '/cart/cartList',
    method:"get"
  })
}

// 切换商品选中状态
// /api/cart/checkCart/{skuID}/{isChecked}  GET
export const reqUpdateCartChecked = (skuId, isChecked) => {
  return ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method:"get"
  })
}

// 删除购物车
// /api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteCart = (skuId) => {
  return ajax({
    url: `/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}

// 用户注册
// /api/user/passport/register  POST
export const reqUserRegister = (userInfo) => {
  return ajax({
    url: '/user/passport/register',
    method: 'post',
    data:userInfo
  })
}

// 用户登录
// /api/user/passport/login  POST
export const reqUserLogin = (userInfo) => {
  return ajax({
    url: '/user/passport/login',
    method: 'post',
    data:userInfo
  })
}

// 获取用户信息
// /api/user/passport/auth/getUserInfo  GET
export const reqUserInfo = () => {
  return ajax({
    url: "/user/passport/auth/getUserInfo",
    method:'get'
  })
}

// 退出登录
// /api/user/passport/logout
export const reqUserLogout = () => {
  return ajax({
    url: '/user/passport/logout',
    method:'get'
  })
}

// 获取订单交易地址
// /api/order/auth/trade  GET
export const reqTradeInfo = () => {
  return ajax({
    url: '/order/auth/trade',
    method:'get'
  })
}
