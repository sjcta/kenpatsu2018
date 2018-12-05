<template>
  <v-app>
    <transition name="door-anim" v-if="showDoor">
      <v-content id="pop">
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
    </transition>

    <transition name="router-anim">
        <router-view v-on:changeLang="changeLang" v-on:clearLang="clearLang"></router-view>
    </transition>
  </v-app>
</template>

<style>

  .door-anim-enter-active {
    animation: dropDown .8s;
    animation-delay: .5s;
  }
  .door-anim-leave-active {
    animation: goOut .5s;
  }
  .router-anim-enter-active {
    animation: fadeIn .5s;
    animation-delay: .2s;
  }
  .router-anim-leave-active {
    animation: fadeOut .3s;
  }
  @keyframes dropDown {
    from {
      transform: translate(0,-50%);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
  @keyframes goOut {
    from {
      transform: translate(0);
      opacity: 1;
    }
    to {
      transform: translate(0,-50%);
      opacity: 0;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1
    }
    to {
      opacity: 0;
    }
  }
  @keyframes moveIn {
    from {
      transform: translate(-50%, 0);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
  @keyframes moveOut {
    from {
      transform: translate(0);
      opacity: 1
    }
    to {
      transform: translate(50%, 0);
      opacity: 0;
    }
  }
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

  #pop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000 url('./assets/bg-01.png') no-repeat top center;
    background-size: cover;
    z-index: 1000;
  }
  #pop .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  #pop #logo {
    position: absolute;
    display: block;
    top: 0px;
    right: 50px;
    width: 120px;
    height: 50px;
    background:url('./assets/logo.png') no-repeat right top;
    background-size: 100%;
  }
  #pop #text {
    display: flex;
    flex-direction: column;
    padding: 0 35px;
  }
  #pop #text p {
    width: 100%;
  }
  #pop #text .headline {
    width: 100%;
    border-bottom: 2px solid #ef0227;
    margin-bottom: 30px;
  }
  #pop #text .headline h1 {
    font-size: 120%;
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
    width: 90%;
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
      showDoor: true
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
      return this.$vuetify.lang.current!="" ? true:false;
    }
  },
  methods: {
    changeLang () {
      const clang = this.$vuetify.lang.current;
      this.$vuetify.lang.current = (clang === 'en') ? 'jp' : 'en';
    },
    setLang (lang) {
      this.$vuetify.lang.current = lang;
      this.showDoor = false;
    },
    clearLang () {
      this.showDoor = true;
    }
  }
}
</script>
