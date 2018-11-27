<template>
  <div>
    <headerBar v-on:childLang = "$emit('changeLang')">{{ $vuetify.t('$vuetify.index.panelList') }}</headerBar>

    <v-content id="panelList">
      <v-container fluid>

        <v-btn-toggle light v-model="toggleTab" mandatory>
          <v-btn flat value="list">
            <v-icon>list</v-icon> <span>{{ $vuetify.t('$vuetify.panelList.list') }}</span>
          </v-btn>
          <v-btn flat value="map">
            <v-icon>map</v-icon> <span>{{ $vuetify.t('$vuetify.panelList.map') }}</span>
          </v-btn>
        </v-btn-toggle>

        <v-list two-line subheader v-for="part in panelParts">

          <h3 class="text-xs-center">{{ part.title }}</h3>

          <div class="segment" v-for="segm in part.segment">

            <v-subheader class="subtitle">{{ segm.title }}</v-subheader>

            <v-list-tile v-for="item in segm.panels" :key="item" avatar @click="">
              <v-list-tile-action>
                {{ getPanelInfo(item).id }}
              </v-list-tile-action>

              <v-list-tile-content>
                <p>{{ getPanelInfo(item).title }}</p>
                <i>[{{ getPanelInfo(item).dept }}] {{ getPanelInfo(item).charge }}</i>
              </v-list-tile-content>

              <v-list-tile-action>
                  <v-icon color="grey lighten-1" right>chevron_right</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </div>
        </v-list>

      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
.v-btn-toggle {
  width: 100%;
}
.v-btn-toggle .v-btn {
  width: 50%;
}
.v-btn-toggle .v-btn span {
  margin-left: 5px;
}
.v-btn.v-btn--active {
  background-color: #2196f3;
  color: #FFF;
}
.v-btn.v-btn--active * {
  color: #FFF;
}
#panelList {
  font-size: 90%;
}
#panelList h3 {
  height: 30px;
  line-height: 30px;
  background-color: #2196f3;
  color: #FFF;
  margin: 20px 0;
}
#panelList .subtitle {
  line-height: 25px;
  border-bottom: 1px solid #ccc;
  margin: 20px 0 10px;
  height: 40px;
}
#panelList .v-list__tile {
  min-height: 50px;
  padding: 10px 0;
}
#panelList .v-list__tile__action {
  display: inline-block;
  min-width: 40px;
  font-size: 12px;
}
#panelList .v-list__tile__title {
  font-size: 12px;
  height: auto;
}
#panelList .v-list__tile__content {
  justify-content: start;
}
#panelList .v-list__tile__content p {
  font-size: 83%;
  font-weight: normal;
  margin-bottom: 2px;
}
#panelList .v-list__tile__content i {
  font-size: 73%;
  color: #999;
}

</style>

<script>
import headerBar from '../components/headerBar.vue'

export default {
  name: 'panelList',
  components: {
    headerBar
  },
  data () {
    return {
      toggleTab: 'list'
    }
  },
  computed: {
    panelParts () {
      return this.$store.state.panelParts
    }
  },
  methods: {
    getPanelInfo (pid) {
      return this.$store.getters.getPanelById(pid)
    }
    // panelInfo (pid) {
    //   //console.log(id);
    //   let panelsInfo = this.$store.state.panelInfo;
    //   let pn = panelsInfo.find(o => o.id === pid);
    //   return pn.title;
    // }
  }
}
</script>
