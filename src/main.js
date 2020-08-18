import Vue from 'vue'
import App from './App.vue'
import wb from './registerServiceWorker'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { securedAxioSIntance, plainAxiosIntance } from './backend/axios/axios'
import Vuelidate from 'vuelidate'

Vue.prototype.$workbox = wb
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://krio-records.firebaseio.com/'
axios.defaults.headers.get.Accepts = 'application/json'
Vue.use(VueAxios, {
  secured: securedAxioSIntance,
  plain: plainAxiosIntance
})
Vue.use(Vuelidate)

new Vue({
  vuetify,
  securedAxioSIntance,
  plainAxiosIntance,
  render: h => h(App)
}).$mount('#app')
