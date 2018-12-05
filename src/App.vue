<template>
  <v-app>
    <v-content id="pop"  transition="fade-transition" v-show="isLangSet">
      <v-container fluid fill-height>

        <div id="logo"></div>

        <v-layout align-center justify-center id="text" class="text-xs-center white--text">
          <p class="corp disperse">日立(中国)研究開発有限公司</p>
          <div class="headline">
              <h1 class=" disperse">2018年度研究発表会</h1>
              <span>Hitachi (China) R&D Corporation 2018 Kenpatsu</span>
          </div>

          <div class="location">
            <h3>発表会場</h3>
            <span>文津国際ホテル 5F陽光庁<br /> (中国北京市海淀区成府路清華大学南門)</span>
          </div>
          <div class="date">
            <h3>開催日時</h3>
            <span>2018年12月7日（金） 10:00-18:00</span>
          </div>

          
          <div id="buttons">
              <v-btn color="white" @click="setLang('en')">English</v-btn>
              <v-btn color="white" @click="setLang('jp')">日本語</v-btn>
          </div>
        </v-layout>

      </v-container>
    </v-content>

    <transition>
        <router-view v-on:changeLang="changeLang"></router-view>
    </transition>
  </v-app>
</template>

<style>
  body {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
  .theme--light.application:before {
    content: ' ';
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('./assets/bg_grey.png') 0 0 repeat;
  }
  .theme--light.application {
    background: none;
  }
  footer {
    border-top: 1px solid #eee;
  }
   .v-toolbar {
     z-index: 99;
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

  #pop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000 url('./assets/bg-01.png') no-repeat top center;
    background-size: 100%;
    z-index: 1000;
  }
  #pop #logo {
    position: absolute;
    display: block;
    top: -10px;
    right: 50px;
    width: 120px;
    height: 50px;
    background:url('./assets/logo.png') no-repeat right top;
    background-size: 100%;
  }
  #pop #text {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
  }
  #pop #text p {
    width: 100%;
  }
  #pop .fill-height {
    height: 80%;
  }
  #pop #text .headline {
    width: 100%;
    border-bottom: 2px solid #ef0227;
    margin-bottom: 30px;
  }
  #pop #text .headline h1 {
    font-size: 130%;
    line-height: 1;
  }
  #pop #text .headline span {
    font-size: 50%;
  }
  #pop p.corp {
    border-bottom: 2px solid #ef0227;
    font-size: 140%;
    font-weight: 900;
    line-height: 2;
  }
  #pop #text .location,
  #pop #text .date {
    width: 80%;
    font-size: 90%;
    margin-bottom: 20px;
  }
  #pop #text .location h3 {
    border-bottom: 2px solid #FFF;
    margin-bottom: 5px;
    line-height: 2;
  }
  #pop #text .location span {
    line-height: 1.5;
  }
  #buttons {
    margin-top: 50px;
  }
  .disperse {
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
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
    '$route':function(to,from){
                this.$vuetify.goTo(0);
            }
  },
  mounted () {
  },
  computed: {
    isLangSet() {
      return this.$vuetify.lang.current=="" ? true:false;
    }
  },
  methods: {
    changeLang () {
      const clang = this.$vuetify.lang.current
      this.$vuetify.lang.current = (clang === 'en') ? 'jp' : 'en'
    },
    setLang (lang) {
      this.$vuetify.lang.current = (lang === 'en') ? 'jp' : 'en'
    }
  }
}
</script>
