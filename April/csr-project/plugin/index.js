function MyPlugin(options) {
  myOptions = options;
  return MyPlugin; 
}
MyPlugin.install = function(Vue) {
  // console.log('this is  plugin')
  Vue.mixin({
    created() {
      const name = this.$options.name;
      // console.log(this.$options.name,'tt')
      if (name === 'search') {
        this.$store.dispatch('updateNumAction', 111)
      } else {
        this.$store.dispatch('updateNumAction', 222)
      }
    }
  })
}

export default MyPlugin;