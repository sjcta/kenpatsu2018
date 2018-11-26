<template>
  <div>
    <headerBar v-on:childLang = "$emit('changeLang')">{{ $vuetify.t('$vuetify.index.panelList') }}</headerBar>

    <v-content id="panelList">
      <v-container fluid>

            <v-btn-toggle light v-model="toggle_one" mandatory>
              <v-btn flat value="list" active>
                <v-icon>list</v-icon> <span>{{ $vuetify.t('$vuetify.panelList.list') }}</span>
              </v-btn>
              <v-btn flat value="map">
                <v-icon>map</v-icon> <span>{{ $vuetify.t('$vuetify.panelList.map') }}</span>
              </v-btn>
            </v-btn-toggle>

            <h2></h2>

      </v-container>
    </v-content>
  </div>
</template>

<style>
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
          area: {
            "a": {
              title: "Business Incubation"
            },
            "b": {
              title: "Baseload Technology"
            },
            "c": {
              title: "Open Innovation"
            }
          },
          panels: {
            "a": {
              "A-01": {
                "title": "Digital care management",
                "segment": "Healthcare & Nursing",
                "charge": "宫崎邦彦",
                "dept": "DS"
              },
              "A-02": {
                "title": "Urban mobility solution in China",
                "segment": "Urban Digital",
                "charge": "関口隆昭",
                "dept": "DS"
              },
              "A-03": {
                "title": "Robot collaboration platform - GRACE",
                "segment": "Urban Digital",
                "charge": "鲁时雨，车航宇，裴雅超",
                "dept": "DS"
              },
              "A-04": {
                "title": "Suspect Tracking System for Police",
                "segment": "Urban Digital",
                "charge": "谢雨来",
                "dept": "IT"
              },
              "A-05": {
                "title": "Sale channel optimized allocation solution",
                "segment": "Smart Manufacturing & Logistics",
                "charge": "张学，张岱",
                "dept": "IT"
              },
              "A-06": {
                "title": "Pentaho based data Insight into smart production process",
                "segment": "Smart Manufacturing & Logistics",
                "charge": "范虎岳",
                "dept": "IT"
              },
              "A-07": {
                "title": "Expansion of Logistics Vehicle Operation Solution in China Market",
                "segment": "Smart Manufacturing & Logistics",
                "charge": "郑萌，罗蜀钰",
                "dept": "IT"
              },
              "A-08": {
                "title": "現場改善に向けたMESデータ分析による生産効率向上技術",
                "segment": "Smart Manufacturing & Logistics",
                "charge": "苏银蕊，赖素红，左濱",
                "dept": "GP"
              },
              "A-09": {
                "title": "Robotic cable assembly technology for flexible wire",
                "segment": "Smart Manufacturing & Logistics",
                "charge": "苏银蕊",
                "dept": "GP"
              },

            }
          }
      }
    },
    methods: {
    }
  }
</script>
