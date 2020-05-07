<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <p>
      getNum
      {{getNum}}
      <button @click="changeNum">点击改变 store 的值</button>
    </p>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters([
      'getNum'
    ])
  },
  methods: {
    ...mapActions([
      'updateNumAction'
    ]),
    changeNum() {
      const {num} = this.$store.state.num;
      // this.$store.dispatch('updateNumAction',  num + 1);
      this.updateNumAction(num + 1);
    }
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
}
</style>
