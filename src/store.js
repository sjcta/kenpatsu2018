import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    states: 'turn-left',
    panelParts: [
      {
        title: 'Business Incubation',
        segment: [
          {
            title: 'Healthcare & Nursing',
            panels: ['A-01']
          }, {
            title: 'Urban Digital',
            panels: ['A-02', 'A-03', 'A-04']
          }, {
            title: 'Smart Manufacturing & Logistics',
            panels: ['A-05', 'A-06', 'A-07', 'A-08', 'A-09', 'A-10', 'A-11']
          }
        ]
      }, {
        title: 'Baseload Technology',
        segment: [
          {
            title: 'Design',
            panels: ['B-01', 'B-02', 'B-03']
          },
          {
            title: 'Digital Technology',
            panels: ['B-04', 'B-05', 'B-06', 'B-07', 'B-08']
          },
          {
            title: 'Materials & Monozukuri',
            panels: ['B-09', 'B-10', 'B-11', 'B-12', 'B-13']
          }
        ]
      }, {
        title: 'Open Innovation',
        segment: [
          {
            title: 'Open Innovation',
            panels: ['C-01', 'C-02', 'C-03']
          }
        ]
      }
    ],
    panelInfo: [
      {
        'id': 'A-01',
        'title': 'Digital care management',
        'charge': '宫崎邦彦',
        'dept': 'DS'
      }, {
        'id': 'A-02',
        'title': 'Urban mobility solution in China',
        'charge': '関口隆昭',
        'dept': 'DS'
      }, {
        'id': 'A-03',
        'title': 'Robot collaboration platform - GRACE',
        'charge': '鲁时雨，车航宇，裴雅超',
        'dept': 'DS'
      }, {
        'id': 'A-04',
        'title': 'Suspect Tracking System for Police',
        'charge': '谢雨来',
        'dept': 'IT'
      }, {
        'id': 'A-05',
        'title': 'Sale channel optimized allocation solution',
        'charge': '张学，张岱',
        'dept': 'IT'
      }, {
        'id': 'A-06',
        'title': 'Pentaho based data Insight into smart production process',
        'charge': '范虎岳',
        'dept': 'IT'
      }, {
        'id': 'A-07',
        'title': 'Expansion of Logistics Vehicle Operation Solution in China Market',
        'charge': '郑萌，罗蜀钰',
        'dept': 'IT'
      }, {
        'id': 'A-08',
        'title': '現場改善に向けたMESデータ分析による生産効率向上技術',
        'charge': '苏银蕊，赖素红，左濱',
        'dept': 'GP'
      }, {
        'id': 'A-09',
        'title': 'Robotic cable assembly technology for flexible wire',
        'charge': '苏银蕊',
        'dept': 'GP'
      }, {
        'id': 'A-10',
        'title': '（お）商材をビークルとした製造フルバリューチェーンの展開',
        'charge': '姚开鹏',
        'dept': 'GP'
      }, {
        'id': 'A-11',
        'title': 'Smart International Logistics Solution connected in China-SEA Area',
        'charge': '赖素红',
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
