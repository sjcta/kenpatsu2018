import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import cn from '../locale/en.js'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: {
      'cn': cn
    },
    current: 'cn'
  }
})
