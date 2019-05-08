import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
