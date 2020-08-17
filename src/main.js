import Vue from 'vue'
import App from './App.vue'
import wb from './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.prototype.$workbox = wb
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
