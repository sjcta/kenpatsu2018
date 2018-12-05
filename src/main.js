import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQRCodeComponent from 'vue-qrcode-component'

Vue.config.productionTip = false
Vue.component('qr-code', VueQRCodeComponent) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
