<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
  name: 'mSwipe'
}
</script>
<style scoped>
.mint-swipe {
  max-height: 200px;
}
</style>