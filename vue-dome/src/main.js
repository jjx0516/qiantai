import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import TypeNav from './components/TypeNav';
import Pagination from './components/Pagination';
import './plugins/swiper.js';


Vue.config.productionTip = false

Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name, Pagination)

new Vue({
  beforeCreate() {
    // 创建或指定全局事件总线,保存到vue的原型上(兄弟间组件通讯)
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,  // 注册路由  ==>所有的组件都可以直接访问2个对象:$router和$route
  store,  // 注册vuex  ==>所有组价都可以直接访问1个对象:$store
}).$mount('#app')
