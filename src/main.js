import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
