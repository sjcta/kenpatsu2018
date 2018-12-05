import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    states: 'turn-left',
    showDoor: true,
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
        'title': '$vuetify.panelList.panels[12].title',
        'charge': '$vuetify.panelList.panels[12].charge',
        'dept': 'DS'
      }, {
        'id': 'B-02',
        'title': '$vuetify.panelList.panels[13].title',
        'charge': '$vuetify.panelList.panels[13].charge',
        'dept': 'DO'
      }, {
        'id': 'B-03',
        'title': '$vuetify.panelList.panels[14].title',
        'charge': '$vuetify.panelList.panels[14].charge',
        'dept': 'DO'
      }, {
        'id': 'B-04',
        'title': '$vuetify.panelList.panels[15].title',
        'charge': '$vuetify.panelList.panels[15].charge',
        'dept': 'IT'
      }, {
        'id': 'B-05',
        'title': '$vuetify.panelList.panels[16].title',
        'charge': '$vuetify.panelList.panels[16].charge',
        'dept': 'IT'
      }, {
        'id': 'B-06',
        'title': '$vuetify.panelList.panels[17].title',
        'charge': '$vuetify.panelList.panels[17].charge',
        'dept': 'IT'
      }, {
        'id': 'B-07',
        'title': '$vuetify.panelList.panels[18].title',
        'charge': '$vuetify.panelList.panels[18].charge',
        'dept': 'IT'
      }, {
        'id': 'B-08',
        'title': '$vuetify.panelList.panels[19].title',
        'charge': '$vuetify.panelList.panels[19].charge',
        'dept': 'IT'
      }, {
        'id': 'B-09',
        'title': '$vuetify.panelList.panels[20].title',
        'charge': '$vuetify.panelList.panels[20].charge',
        'dept': 'PT'
      }, {
        'id': 'B-10',
        'title': '$vuetify.panelList.panels[21].title',
        'charge': '$vuetify.panelList.panels[21].charge',
        'dept': 'PT'
      }, {
        'id': 'B-11',
        'title': '$vuetify.panelList.panels[22].title',
        'charge': '$vuetify.panelList.panels[22].charge',
        'dept': 'PT'
      }, {
        'id': 'B-12',
        'title': '$vuetify.panelList.panels[23].title',
        'charge': '$vuetify.panelList.panels[23].charge',
        'dept': 'PT'
      }, {
        'id': 'B-13',
        'title': '$vuetify.panelList.panels[24].title',
        'charge': '$vuetify.panelList.panels[24].charge',
        'dept': 'PT'
      }, {
        'id': 'C-01',
        'title': '$vuetify.panelList.panels[25].title',
        'charge': '$vuetify.panelList.panels[25].charge',
        'dept': 'DS'
      }, {
        'id': 'C-02',
        'title': '$vuetify.panelList.panels[26].title',
        'charge': '$vuetify.panelList.panels[26].charge',
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
