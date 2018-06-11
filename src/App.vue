<template>
  <div id="app">
    <cart></cart>
    <mt-tabbar>
      <mt-tab-item id="tab1">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        分类
      </mt-tab-item>
      <mt-tab-item id="tab3" class="active">
        购物车
      </mt-tab-item>
      <mt-tab-item id="tab4">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Index from './components/Index.vue'
import MyInfo from './components/MyInfo.vue'
import Cart from './components/Cart'

export default {
  name: 'app',
  components: {
    Index,
    MyInfo,
    Cart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color: #FE3540;
}
</style>
