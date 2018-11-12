import Vue from 'vue'
import router from './router.js'
import store from './vuex/user.js'

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
