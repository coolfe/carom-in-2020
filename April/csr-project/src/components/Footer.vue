<template>
  <mt-tabbar v-model="selected">
  <mt-tab-item id="home">
    <div @click="change('home')">
      <img slot="icon" src="static/img/index.png">
      首页
    </div>
  </mt-tab-item>
  <mt-tab-item id="vip">
    <div @click="change('vip')">
      <img slot="icon" src="static/img/vip.png">
      会员
    </div>
  </mt-tab-item>
  <mt-tab-item id="shop">
    <div @click="change('shop')">
      <img slot="icon" src="static/img/shopcart.png">
      购物车
    </div>
  </mt-tab-item>
  <mt-tab-item id="search">
    <div @click="change('search')">
      <img slot="icon" src="static/img/find.png">
      查找
    </div>
  </mt-tab-item>
</mt-tabbar>
</template>
<script>
export default {
  name: 'mfooter',
  data () {
    return {
      selected: 'home'
    }
  },
  methods: {
    change(v) {
      this.$router.push({
        name: v
      })
    }
  },
  watch: {
    selected: function(n) {
      // console.log(n)
    }
  }
}
</script>
<style scoped>
.mint-tabbar {
  position: fixed;
  bottom: 0;
}
.mint-tab-item img {
    display: block;
    width: 50px;
    height: 50px;
}
</style>
