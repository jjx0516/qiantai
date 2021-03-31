<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import ListContainer from './ListContainer'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

export default {
  name: 'Home',
  mounted() {
    
  },
  components:{
    TodayRecommend,
    Rank,
    ListContainer,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>

</style>
