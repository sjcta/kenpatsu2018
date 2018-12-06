<template>
  <div>
    <v-toolbar app dark flat>
      <v-toolbar-title class="title text-uppercase">
        <span @click="$emit('closeDoor')">{{ $vuetify.t('$vuetify.header.title') }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outline color="white" @click="$emit('changeLang')">
        <span>{{$vuetify.t('$vuetify.header.lang')}}</span>
      </v-btn>
    </v-toolbar>

    <v-content id="indexPage">
      <v-container fluid>
        <!-- <v-card>
          <v-card-text id="info">
            <p class="text-xs-center date headline">{{ $vuetify.t('$vuetify.index.date') }}</p>
            <p class="text-xs-center gray--text">10:00 ~ 18:00</p>
            <p class="text-xs-center loca body-2" v-html="$vuetify.t('$vuetify.index.loca')"></p>
          </v-card-text>
        </v-card> -->

        <div id="buttonList">
          <h1
            class="text-xs-center headline font-weight-bold text-uppercase"
          >{{ $vuetify.t('$vuetify.index.information') }}</h1>

          <v-layout row wrap>
            <v-flex  xs12 sm6 offset-sm3>
              <v-btn block large color="info " to="/agenda">
                <v-icon left large>today</v-icon>
                <span class="text-capitalize">
                  {{ $vuetify.t('$vuetify.index.agenda') }}
                </span>
              </v-btn>
              <v-btn block large color="info" to="/panel">
                <v-icon left large>mms</v-icon>
                <span class="text-capitalize">
                  {{ $vuetify.t('$vuetify.index.panelList') }}
                </span>
              </v-btn>
              <v-btn block large color="info" to="/lunchdinner">
                <v-icon left large>restaurant_menu</v-icon>
                <span class="text-capitalize">
                  {{ $vuetify.t('$vuetify.index.lunchDinner') }}
                </span>
              </v-btn>
              <v-btn block large outline color="info" :href="$vuetify.t('$vuetify.index.questURL')">
                <v-icon left large>how_to_vote</v-icon>
                <span class="text-capitalize">{{ $vuetify.t('$vuetify.index.quest') }}</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </div>

        <div id="contact">
          <h1
            class="text-xs-center headline font-weight-bold text-uppercase"
          >{{ $vuetify.t('$vuetify.index.contact') }}</h1>
          <p class="text-xs-center body-1">{{ $vuetify.t('$vuetify.index.office') }}</p>
          <v-layout row>
            <v-flex xs6 order-lg2>
              <h3>{{ $vuetify.t('$vuetify.index.person1.name') }}</h3>
              <v-btn
                flat
                small
                class="text-lowercase"
                @click="mailto($vuetify.t('$vuetify.index.person1.mail'))"
              >
                <v-icon left>mail</v-icon>
                {{ $vuetify.t('$vuetify.index.person1.mail') }}
              </v-btn>
              <v-btn
                flat
                small
                class="text-lowercase"
                @click="telto($vuetify.t('$vuetify.index.person1.tel'))"
              >
                <v-icon left>phone</v-icon>
                <span class="text-sm-left" v-html="$vuetify.t('$vuetify.index.person1.tel')"></span>
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <h3>{{ $vuetify.t('$vuetify.index.person2.name') }}</h3>
              <v-btn
                flat
                small
                class="text-lowercase"
                @click="mailto($vuetify.t('$vuetify.index.person2.mail'))"
              >
                <v-icon left>mail</v-icon>
                {{ $vuetify.t('$vuetify.index.person2.mail') }}
              </v-btn>
              <v-btn
                flat
                small
                class="text-lowercase"
                @click="telto($vuetify.t('$vuetify.index.person2.tel'))"
              >
                <v-icon left>phone</v-icon>
                <span class="text-sm-left" v-html="$vuetify.t('$vuetify.index.person2.tel')"></span>
              </v-btn>
            </v-flex>
          </v-layout>

        </div>
      </v-container>
    </v-content>

    <v-footer class="pa-3" light>
      <v-flex text-xs-center>&copy;{{ new Date().getFullYear() }} HCR&amp;D - V1.7</v-flex>
    </v-footer>
  </div>
</template>

<style scoped>
.v-card {
  opacity: .7;
}
#info .date {
  margin: 0;
  color: #0b6fb6;
}
#info .loca {
  margin-bottom: 5px;
}
h1 {
  line-height: 50px;
  margin: 10px 0;
  color: #1f375b;
}
#buttonList button,
#buttonList a {
  margin-bottom: 10px;
  font-size: 120%;
  height: 60px;
}
#buttonList .text-capitalize {
  width: 40%;
}
#contact {
  margin-bottom: 10px;
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
  name: "indexPage",
  mounted(){
  },
  methods: {
    mailto(val) {
      document.location.href = "mailto:" + val;
    },
    telto(val) {
      document.location.href =
        "tel:+" + val.replace(/[^0-9]/gi, "").substring(0, 12);
    }
  }
};
</script>
