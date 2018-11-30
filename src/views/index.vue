<template>
  <div>
        <v-toolbar app dark scroll-off-screen flat>
          <v-toolbar-title class="title text-uppercase">
            <span>{{ $vuetify.t('$vuetify.header.title') }}</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn outline color="white" @click="$emit('changeLang')"><span>{{$vuetify.t('$vuetify.header.lang')}}</span></v-btn>
        </v-toolbar>

        <v-content id="indexPage">
          <v-container fluid>
            <v-card>
              <v-card-text id="info">
                <p class="text-xs-center date headline">{{ $vuetify.t('$vuetify.index.date') }}</p>
                <p class="text-xs-center loca body-2" v-html="$vuetify.t('$vuetify.index.loca')"></p>
              </v-card-text>
            </v-card>

            <div id="buttonList">
              <h1 class="text-xs-center headline font-weight-bold text-uppercase">{{ $vuetify.t('$vuetify.index.information') }}</h1>

              <v-btn block large color="info large" to="/agenda"><span class="text-capitalize">{{ $vuetify.t('$vuetify.index.agenda') }}</span></v-btn>
              <v-btn block large color="info large" to="/panel"><span class="text-capitalize">{{ $vuetify.t('$vuetify.index.panelList') }}</span></v-btn>
              <v-btn block large color="info large" to="/lunchdinner"><span class="text-capitalize">{{ $vuetify.t('$vuetify.index.lunchDinner') }}</span></v-btn>
              <v-btn block large outline color="info"><span class="text-capitalize">{{ $vuetify.t('$vuetify.index.quest') }}</span></v-btn>
            </div>

            <div id="contact">
              <h1 class="text-xs-center headline font-weight-bold text-uppercase">{{ $vuetify.t('$vuetify.index.contact') }}</h1>
              <p class="text-xs-center body-1">{{ $vuetify.t('$vuetify.index.office') }}</p>
              <v-layout row>
                <v-flex xs6 order-lg2>
                    <h3>{{ $vuetify.t('$vuetify.index.person1.name') }}</h3>
                    <v-btn flat small class="text-lowercase" @click="mailto($vuetify.t('$vuetify.index.person1.mail'))">
                      <v-icon left>mail</v-icon>{{ $vuetify.t('$vuetify.index.person1.mail') }}
                    </v-btn>
                    <v-btn flat small class="text-lowercase" @click="telto($vuetify.t('$vuetify.index.person1.tel'))">
                      <v-icon left>phone</v-icon><span class="text-sm-left" v-html="$vuetify.t('$vuetify.index.person1.tel')"></span>
                    </v-btn>
                </v-flex>

                <v-flex xs6>
                    <h3>{{ $vuetify.t('$vuetify.index.person2.name') }}</h3>
                    <v-btn flat small class="text-lowercase" @click="mailto($vuetify.t('$vuetify.index.person2.mail'))">
                      <v-icon left>mail</v-icon>{{ $vuetify.t('$vuetify.index.person2.mail') }}
                    </v-btn>
                    <v-btn flat small class="text-lowercase" @click="telto($vuetify.t('$vuetify.index.person2.tel'))">
                      <v-icon left>phone</v-icon><span class="text-sm-left" v-html="$vuetify.t('$vuetify.index.person2.tel')"></span>
                    </v-btn>
                </v-flex>
              </v-layout>
            </div>

          </v-container>

        </v-content>

      <v-footer class="pa-3" light>
        <v-flex text-xs-center>&copy;{{ new Date().getFullYear() }} HCR&amp;D - V1.41</v-flex>
      </v-footer>
  </div>
</template>

<style scoped>
  #info .date {
    margin: 15px 0;
    color: #0b6fb6;
  }
  h1 {
    line-height: 50px;
    margin: 30px 0 15px;
    color: #1f375b;
  }
  #buttonList button,
  #buttonList a {
    height: 50px;
    margin-bottom: 10px;
    font-size: 120%;
  }
  #contact {
    margin-bottom: 20px;
  }
  #contact button {
    font-size: 12px;
    height: auto;
  }
  #contact .v-icon {
    margin-right: 3px;
  }
  #contact h3 {
    color: #0b6fb6;
    text-indent: 18px;
  }
  #contact .v-btn {
    margin-bottom: 0;
    text-align: left;
  }
</style>

<script>

export default {
  name: 'indexPage',
  methods: {
    mailto (val) {
      document.location.href = 'mailto:' + val
    },
    telto (val) {
      document.location.href = 'tel:+' + val.replace(/[^0-9]/gi, '').substring(0, 12)
    }
  }
}
</script>
