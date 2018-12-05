import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import en from '../locale/en.js'
import jp from '../locale/jp.js'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: {
      'en': en,
      'jp': jp
    },
    current: ''
  }
})
