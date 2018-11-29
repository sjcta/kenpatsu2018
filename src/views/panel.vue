<template>
  <div>
    <headerBar v-on:childLang = "$emit('changeLang')">{{ $vuetify.t('$vuetify.index.panelList') }}</headerBar>

    <v-content id="panelList">

      <v-container fluid>

        <v-btn-toggle  v-model="toggleTab" mandatory>
          <v-btn flat value="list">
            <v-icon>list</v-icon> <span>{{ $vuetify.t('$vuetify.panelList.list') }}</span>
          </v-btn>
          <v-btn flat value="map">
            <v-icon>map</v-icon> <span>{{ $vuetify.t('$vuetify.panelList.map') }}</span>
          </v-btn>
        </v-btn-toggle>


        <v-list two-line subheader v-for="part in panelParts" class="elevation-3" v-if="toggleTab == 'list'">

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

        <div id="map" class="elevation-3" v-if="toggleTab == 'map'">
          <v-layout>
            <v-flex xs12 class="bg">
              <div class="flexBox first">
                <div class="groupA">
                  <span v-for="i in mapGroup.groupA" class="areaB" :id="'B-'+ fixNum(i)">B-{{ fixNum(i) }}</span>
                </div>
                <div class="groupB">
                  <span v-for="i in mapGroup.groupB" class="areaA" :id="'A-'+ fixNum(i)">A-{{ fixNum(i) }}</span>
                </div>
              </div>
              <div class="flexBox bottom">
                <div class="bottom"><span class="areaA" id="A-05">A-05</span></div>
              </div>

              <div class="flexBox bottom">
                  <div><span class="areaA" id="A-04">A-04</span></div>
              </div>
              <div class="flexBox bottom">
                  <div><span class="areaA" id="A-03">A-03</span></div>
              </div>
              <div class="flexBox bottom">
                  <div><span class="areaA" id="A-02">A-02</span></div>
              </div>
              <div class="flexBox">
                <div class="groupC">
                  <span v-for="i in mapGroup.groupC" class="areaB" :id="'B-'+ fixNum(i)">B-{{ fixNum(i) }}</span>
                </div>
                <div class="groupD">
                  <span v-for="i in mapGroup.groupD" class="areaC" :id="'C-'+ fixNum(i)">C-{{ fixNum(i) }}</span>
                </div>
                <div>
                  <span class="none">&nbsp;</span>
                  <span class="areaA" id="A-01">A-01</span>
                </div>
              </div>
              <div class="flexBox last">
                <div class="groupNone">
                  <span>&nbsp;</span>
                  <span class="block">&nbsp;</span>
                  <span class="block">&nbsp;</span>
                  <span class="block">&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </div>

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

#map {
  margin: 20px 0 0;
  padding: 10px;
  background-color: #FFF;
}
#map .layout {
/*  background: url('../assets/map.png') no-repeat left center;
  background-size: 100%;*/
}
#map .layout .bg {
  display: flex;
  align-items: stretch;
  padding-left:10px;
  background-color: #eee;
}
#map .flexBox {
  display: flex;
  width: 14%;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  padding: 10px 0;
}
#map .flexBox div {
  width: 100%;
}
#map .flexBox.first,
#map .flexBox.last {
}
#map .flexBox.bottom {
  align-items: flex-end;
  align-content: flex-end;
}
#map .flexBox span {
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 40px;
  margin-bottom: 1px;
  margin-right: 1px;
}

#map .flexBox .groupA,
#map .flexBox .groupB,
#map .flexBox .groupC {
  display: flex;
  flex-direction: column;
}
#map span.areaA {
  color: #FFF;
  background-color: #886e69;
}
#map span.areaB {
  background-color: #fea477;
}
#map span.areaC {
  color: #FFF;
  background-color: #d45246;
}
#map div.bottom {
  align-self: flex-end;
}

#map .flexBox.last {
  width: 16%;
  padding: 0 0 0 10px;
}

#map .flexBox.last span {
  background-color: #FFF;
  margin: 0;
  height: 42px;
}
#map .flexBox.last span.block {
  background-color: #eee;
  margin: 0;
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
      toggleTab: 'list',
      mapGroup:{
        groupA: [6,5,4,3,2,1],
        groupB: [11,10,9,8,7,6],
        groupC: [7,8,9,10,11,12,13],
        groupD: [1,2,3]
      }
    }
  },
  computed: {
    panelParts () {
      return this.$store.state.panelParts
    }
  },
  methods: {
    getPanelInfo(pid) {
      return this.$store.getters.getPanelById(pid)
    },
    fixNum(num) {
      return (''+num).length < 2 ? ((new Array(2 + 1)).join('0') + num).slice(-2) : '' + num;
    }
  }
}
</script>
