// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './store/index'
import 'mint-ui/lib/style.css'
import '../static/css/globel.css'
import myPlugin from '../plugin/index'

// import Axios from 'axios';


Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(myPlugin(['111']))
// Vue.use(Axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
