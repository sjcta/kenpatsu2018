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


        <v-list two-line subheader v-for="(part,index) in panelParts" class="elevation-3" v-if="toggleTab == 'list'">

          <h3 :class="[{ 'areaA': index==0,'areaB': index==1, 'areaC': index==2}, 'text-xs-center']">{{ part.title }}</h3>

          <div class="segment" v-for="segm in part.segment">

            <h4 class="blue--text">{{ segm.title }}</h4>

            <v-list-tile v-for="item in segm.panels" @click="showMap(getPanelInfo(item).id)">
                <v-list-tile-action>
                  <span class="key">{{ getPanelInfo(item).id }}</span>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-layout align-start justify-start column fill-height>
                      <div class="theme">{{ getPanelInfo(item).title }}</div>
                      <div>
                        <span class="charge grey--text">[{{ getPanelInfo(item).dept }}] {{ getPanelInfo(item).charge }}</span>
                      </div>
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
                  <span v-for="i in blocks.groupA" class="areaB" :refs="i" :class="{active: i==activedBlock?true:false}">{{ i }}</span>
                </div>
                <div class="groupB">
                  <span v-for="i in blocks.groupB" class="areaA" :refs="i" :class="{active: i==activedBlock?true:false}">{{ i }}</span>
                </div>
              </div>
              <div class="flexBox bottom" v-for="i in blocks.groupC">
                  <div><span class="areaA" :refs="i" :class="{active: i==activedBlock?true:false}">{{ i }}</span></div>
              </div>
              <div class="flexBox">
                <div class="groupC">
                  <span v-for="i in blocks.groupD" class="areaB" :refs="i" :class="{active: i==activedBlock?true:false}">{{ i }}</span>
                </div>
                <div class="groupD">
                  <span v-for="i in blocks.groupE" class="areaC" :refs="i" :class="{active: i==activedBlock?true:false}">{{ i }}</span>
                </div>
                <div>
                  <span class="none">&nbsp;</span>
                  <span class="areaA" refs="A-01" :class="{'active': `A-01`==activedBlock ? true:false}">A-01</span>
                </div>
              </div>
              <div class="flexBox last">
                <div class="groupNone">
                  <span>&nbsp;</span>
                  <span class="block" v-for="i in 3">&nbsp;</span>
                  <span v-for="i in 6">&nbsp;</span>
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
  padding: 20px;
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
  height: 35px;
  margin-bottom: 1px;
  margin-right: 1px;
  opacity: .7;
}

#map .flexBox .groupA,
#map .flexBox .groupB,
#map .flexBox .groupC {
  display: flex;
  flex-direction: column;
}
.areaA {
  color: #FFF;
  background-color: #886e69;
}
.areaB {
  background-color: #fea477;
}
.areaC {
  color: #FFF;
  background-color: #d45246;
}
#map div.bottom {
  align-self: flex-end;
}
#map span.active {
  opacity: 1;
  -webkit-animation: twinkling 1s infinite ease-in-out;

}

#map .flexBox.last {
  width: 16%;
  padding: 0 0 0 10px;
}

#map .flexBox.last span {
  background-color: #FFF;
  margin: 0;
  opacity: 1;
}
#map .flexBox.last span.block {
  background-color: #eee;
  border: 1px solid #eee;
  margin: 0;
}


@-webkit-keyframes twinkling{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0.4;
        font-size: 120%;
        background-color: red;
    }
    100%{
        opacity: 1;
    }
}
@keyframes twinkling{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0.4;
        font-size: 120%;
        color: red;
        background-color: white;
    }
    100%{
        opacity: 1;
    }
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
      activedBlock: '',
      blocks:{
        groupA: ['B-06','B-05','B-04','B-03','B-02','B-01'],
        groupB: ['A-11','A-10','A-09','A-08','A-07','A-06'],
        groupC: ['A-05','A-04','A-03','A-02'],
        groupD: ['B-07','B-08','B-09','B-10','B-11','B-12','B-13'],
        groupE: ['C-01','C-02','C-03']
      },
      timer: ""
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
    },
    showMap(id) {
      clearInterval(this.timer);
      this.activedBlock = id;
      this.toggleTab = 'map';
      this.clearBlock();
    },
    clearBlock() {
      this.timer = setInterval(() => {
        this.activedBlock = "";
        clearInterval(this.timer);
      }, 6000)
    }
  }
}
</script>
