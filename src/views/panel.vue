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


        <v-list two-line subheader v-for="part in panelParts" class="elevation-3">

          <h3 class="text-xs-center">{{ part.title }}</h3>

          <div class="segment" v-for="segm in part.segment">

            <h4 class="blue--text">{{ segm.title }}</h4>

            <v-list-tile @click="" v-for="item in segm.panels">
                <v-list-tile-action>
                  <span class="key">{{ getPanelInfo(item).id }}</span>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-layout align-start justify-start column fill-height>
                      <div class="theme">{{ getPanelInfo(item).title }}</div>
                      <div><span class="charge grey--text">[{{ getPanelInfo(item).dept }}] {{ getPanelInfo(item).charge }}</span></div>
                  </v-layout>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon color="grey lighten-1">chevron_right</v-icon>
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
  height: 40px;
  line-height: 40px;
  background-color: #2196f3;
  font-size: 15px;
  color: #FFF;
  margin: 20px 0 0;
}
#panelList h4 {
  padding: 15px 0 10px;
  margin-left: 16px;
  border-bottom: 1px solid #ccc;
}

#panelList .v-list__tile {
  padding: 8px 0;
  display: flex;
  align-items: flex-start;
  height: auto;
  min-height: auto;
}
#panelList .v-list__tile__action {
  min-width: 40px;
  padding: 6px 0 0;
  align-items: flex-start;
}
#panelList .key {
  font-size: 11px;
}
#panelList .theme {
  display: block;
  font-size: 12px;
  line-height: 1.2;
  padding: 8px 0 0;
}
#panelList .charge {
  padding: 0;
  font-size: 12px;
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
    },

  },
  methods: {
    getPanelInfo(pid) {
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
