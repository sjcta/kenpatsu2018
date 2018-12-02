<template>
  <v-app>
      <transition :name="transitionName">
          <router-view v-on:changeLang="changeLang"></router-view>
      </transition>
  </v-app>
</template>

<style>
  body {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
  #app:before {
    content: ' ';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    background: url('./assets/bg_grey.png') no-repeat center center;
    background-size: cover;
    will-change: transform;
    z-index: -1;
  }
  footer {
    border-top: 1px solid #eee;
  }
  .v-toolbar > .title {
    font-size: 18px;
  }
  .v-toolbar button {
    min-width: 60px;
    padding: 5px;
  }

  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
      will-change: transform;
      transition: all 500ms;
      height: 100%;
      width: 100%;
      position: absolute;
      backface-visibility: hidden;
      perspective: 1000;
      overflow: hidden;
  }
  .vux-pop-out-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0; transform: translate3d(-100%, 0, 0);
  }

  .router-view{
    height:100%;
    width: 100%;
    position: absolute;
    -webkit-transition: all .3s cubic-bezier(1,0,.1,1);
    -moz-transition: all .3s cubic-bezier(1,0,.1,1);
    -ms-transition: all .3s cubic-bezier(1,0,.1,1);
    -o-transition: all .3s cubic-bezier(1,0,.1,1);
    transition: all .3s cubic-bezier(1,0,.1,1);
  }
</style>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      transitionName: 'vux-pop-out'
    }
  },
  created () {
  },
  watch: {
    $route (to, from) {
      if (to.path !== '/') {
        this.transitionName = 'vux-pop-in'
      } else {
        this.transitionName = 'vux-pop-out'
      }
    }
  },
  methods: {
    changeLang () {
      const clang = this.$vuetify.lang.current
      this.$vuetify.lang.current = (clang === 'en') ? 'jp' : 'en'
    }
  }
}
</script>
