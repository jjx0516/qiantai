<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
// import {getCategoryList} from './api'
export default {
  name: 'App',

  mounted() {
    // // 异步获取三级分类列表
    // getCategoryList().then(result=>{
    //   console.log('result',result);
    // })
    // 分发 请求获取分类列表的异步操作
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>
