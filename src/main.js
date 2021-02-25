import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/normalize.css'
import '../src/assets/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
