<template>
    <div>
      <Header></Header>
      <Swipe></Swipe>
      <Nav></Nav>
    </div>
</template>

<script>
import Swipe from '@/components/Swipe'
import Nav from '@/components/Nav'
export default {
  name: 'home',
  components: {
    Swipe,
    Nav
  },
  data () {
    return {
      msg: 'home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
