import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter)

//重写push方法
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err
    }
    // rethrow error
    return Promise.reject(err)
  })
}
//重写replace方法
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err
    }
    // rethrow error
    return Promise.reject(err)
  })
}

 const router = new VueRouter({
  mode: 'history',  // 不带# 
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})

// 全局前置导航守卫
router.beforeEach(async(to, from, next) => {
  // to 代表准备去的路由对象
  // from 代表从哪个地方来的路由对象
  // next 是一个函数,  next() 代表无条件放行  next(false) 代表不放行,  next('/') ,next({path:'/'}) 代表最终去哪

  // token 校验
  let token = store.state.user.token  // 获取token
  if (token) {
    // 代表登录了,或之前登录了
    if (to.path==='/login') {
      next('/')
    } else {
      let hasUserInfo = !!store.state.user.userInfo.nickName
      if (hasUserInfo) {
        next()
      } else {
        // 此时登录过了,去的不是主页,我们要根据token发送请求获取用户真实数据
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          alert('用户的token过期或者未知错误')
          // 如果token过期,清除
          store.dispatch('resetUserInfo')
          // 去到之前想去的地方,需要和登录逻辑配合使用
          next('/login?redirect='+to.path)
        }
      }
      
    }
  } else {
    // 代表用户之前没登录

    // 判断用户是否去订单页面
    next()
  }

})


export default router