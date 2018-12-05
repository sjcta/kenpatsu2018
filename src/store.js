import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    states: 'turn-left',
    panelParts: [
      {
        title: '$vuetify.panelList.parts[0].title',
        segment: [
          {
            title: '$vuetify.panelList.parts[0].segment[0]',
            panels: ['A-01', 'A-02', 'A-03']
          }, {
            title: '$vuetify.panelList.parts[0].segment[1]',
            panels: ['A-04', 'A-05', 'A-06', 'A-07', 'A-08', 'A-09', 'A-10']
          }, {
            title: '$vuetify.panelList.parts[0].segment[2]',
            panels: ['A-11']
          }
        ]
      }, {
        title: '$vuetify.panelList.parts[1].title',
        segment: [
          {
            title: '$vuetify.panelList.parts[1].segment[0]',
            panels: ['B-01', 'B-02', 'B-03']
          },
          {
            title: '$vuetify.panelList.parts[1].segment[1]',
            panels: ['B-04', 'B-05', 'B-06', 'B-07', 'B-08']
          },
          {
            title: '$vuetify.panelList.parts[1].segment[2]',
            panels: ['B-09', 'B-10', 'B-11', 'B-12', 'B-13']
          }
        ]
      }, {
        title: '$vuetify.panelList.parts[2].title',
        segment: [
          {
            title: '$vuetify.panelList.parts[2].segment[0]',
            panels: ['C-01', 'C-02']
          }
        ]
      }
    ],
    panelInfo: [
      {
        'id': 'A-01',
        'title': '$vuetify.panelList.panels[1].title',
        'charge': '$vuetify.panelList.panels[1].charge',
        'dept': 'DS'
      }, {
        'id': 'A-02',
        'title': '$vuetify.panelList.panels[2].title',
        'charge': '$vuetify.panelList.panels[2].charge',
        'dept': 'DS'
      }, {
        'id': 'A-03',
        'title': '$vuetify.panelList.panels[3].title',
        'charge': '$vuetify.panelList.panels[3].charge',
        'dept': 'DS'
      }, {
        'id': 'A-04',
        'title': '$vuetify.panelList.panels[4].title',
        'charge': '$vuetify.panelList.panels[4].charge',
        'dept': 'IT'
      }, {
        'id': 'A-05',
        'title': '$vuetify.panelList.panels[5].title',
        'charge': '$vuetify.panelList.panels[5].charge',
        'dept': 'IT'
      }, {
        'id': 'A-06',
        'title': '$vuetify.panelList.panels[6].title',
        'charge': '$vuetify.panelList.panels[6].charge',
        'dept': 'IT'
      }, {
        'id': 'A-07',
        'title': '$vuetify.panelList.panels[7].title',
        'charge': '$vuetify.panelList.panels[7].charge',
        'dept': 'IT'
      }, {
        'id': 'A-08',
        'title': '$vuetify.panelList.panels[8].title',
        'charge': '$vuetify.panelList.panels[8].charge',
        'dept': 'GP'
      }, {
        'id': 'A-09',
        'title': '$vuetify.panelList.panels[9].title',
        'charge': '$vuetify.panelList.panels[9].charge',
        'dept': 'GP'
      }, {
        'id': 'A-10',
        'title': '$vuetify.panelList.panels[10].title',
        'charge': '$vuetify.panelList.panels[10].charge',
        'dept': 'GP'
      }, {
        'id': 'A-11',
        'title': '$vuetify.panelList.panels[11].title',
        'charge': '$vuetify.panelList.panels[11].charge',
        'dept': 'GP'
      }, {
        'id': 'B-01',
        'title': 'Nexperience for China SIB (collaboration with Tencent and ZTT etc.)-TBD',
        'charge': '陈玉露',
        'dept': 'DS'
      }, {
        'id': 'B-02',
        'title': 'Conceptual Visualization of SIB Business Domain',
        'charge': '王欣',
        'dept': 'DO'
      }, {
        'id': 'B-03',
        'title': '中国現場業務調査から明確化した保守サービスの品質向上',
        'charge': '何婷',
        'dept': 'DO'
      }, {
        'id': 'B-04',
        'title': 'Intelligent Applications based on Video Analysis',
        'charge': '张盼/沙浩',
        'dept': 'IT'
      }, {
        'id': 'B-05',
        'title': 'Symantic Based Video Structuring Framework',
        'charge': '谢雨来/BP曾智嵘',
        'dept': 'IT'
      }, {
        'id': 'B-06',
        'title': 'Integration of Hitachi OT & IT to create new value: Lumada platform & Real Use Case (Yum)',
        'charge': '刘锋，周绥健，曾智嵘，耿璐,杨和东',
        'dept': 'IT'
      }, {
        'id': 'B-07',
        'title': '5G Tsinghua related ',
        'charge': '耿璐',
        'dept': 'IT'
      }, {
        'id': 'B-08',
        'title': 'Standardization for smart manufacturing promotion',
        'charge': '周绥健，陆程遂，姜淼',
        'dept': 'IT'
      }, {
        'id': 'B-09',
        'title': '拡大する中国市場への社会実装を加速する電動化システム技術',
        'charge': '孟毅',
        'dept': 'PT'
      }, {
        'id': 'B-10',
        'title': 'Component technology to adapt for needs of downsizing and ligh weight in China EV society',
        'charge': '德山健',
        'dept': 'PT'
      }, {
        'id': 'B-11',
        'title': 'Simulation technology to support local manufacturing in China',
        'charge': '赵幸锋',
        'dept': 'PT'
      }, {
        'id': 'B-12',
        'title': 'Life prediction technology of PU guide roller for elevator',
        'charge': '董强',
        'dept': 'PT'
      }, {
        'id': 'B-13',
        'title': 'Achievements and Prospects of the Collaboration between Hitachi and SJTU',
        'charge': '董强',
        'dept': 'PT'
      }, {
        'id': 'C-01',
        'title': 'University collaboration',
        'charge': '章一苇',
        'dept': 'DS'
      }, {
        'id': 'C-02',
        'title': 'Hotspot collaboration',
        'charge': '章一苇',
        'dept': 'DS'
      }, {
        'id': 'C-03',
        'title': 'Standardization activities',
        'charge': '章一苇',
        'dept': 'DS'
      }
    ]
  },
  getters: {
    getPanelById: (state) => (id) => {
      return state.panelInfo.find(p => p.id === id)
    }
  },
  mutations: {
    setTransition (state, states) {
      state.states = states
    }
  },
  actions: {
  }
})
