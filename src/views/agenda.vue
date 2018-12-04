<template>
  <div>
    <headerBar v-on:childLang = "$emit('changeLang')">{{ $vuetify.t('$vuetify.index.agenda') }}</headerBar>

    <v-content id="agendaPage">
      <v-container fluid>
        <v-list dense>
          <div class="line"></div>
          <div v-for="(item, index) in agendaA" :key="'part' + index" class="agendaPart">
            <div class="timeFrom">
              <p>{{ item.time }}</p>
            </div>

            <div class="contents" :class="item.class">
              <p v-html="$vuetify.t(item.theme)"></p>
              <v-btn icon ripple v-if="item.to">
                <v-icon color="lighten-2">chevron_right</v-icon>
              </v-btn>
            </div>
          </div>
        </v-list>

        
        <v-list dense>
          <div v-for="(item, index) in agendaB" :key="'part' + index" class="agendaPart part2">
            <div class="timeFrom">
              <p v-if="item.time">{{ item.time }}</p>
            </div>

            <div class="contents" :class="{'subtitle blue white--text': !item.time, 'blue--text': item.time}">
              <p v-html="$vuetify.t(item.theme)"></p>
              <span v-html="$vuetify.t(item.ppl)"></span>
            </div>
          </div>
        </v-list>
      </v-container>
    </v-content>
  </div>
</template>

<style scoped>

.line {
  position: absolute;
  left: 48px;
  border-left: 2px solid #eee;
  top: 30px;
  bottom: 30px;
  z-index: 1;
}
.v-list {
    padding: 10px;
}

.agendaPart {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 10px;
  z-index: 10;
}
.agendaPart .timeFrom {
  position: relative;
  width: 50px;
  margin-right: 10px;
  z-index: 10;
}
.agendaPart .timeFrom p {
  padding: 5px 0;
  background: #FFF;
  text-align: center;
}
.agendaPart .v-list--dense {
  height: auto;
}

.agendaPart .contents {
  display: flex;
  width: 100%;
  flex-direction: row;
}

.agendaPart .contents p {
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  margin: 0;
  padding: 5px;
  text-align: center;
  width: 100%;
}
.agendaPart .contents .v-btn {
  justify-content: flex-end;
  align-content: flex-end;
  align-items: stretch;
  min-width: 30px;
  margin: 0;
}
.agendaPart.part2 .contents {
  flex-direction: column;
}
.agendaPart.part2 .contents p {
  text-align: left;
  padding: 5px;
}
.agendaPart.part2 .contents span {
  color: #999;
  font-size: 9px;
  padding: 0 5px;
  line-height: 1;
}
.agendaPart.part2 .subtitle {
  font-size: 10px;
  border-radius: 15px;
  -moz-outline-radius: 15px;
}
.agendaPart.part2 .subtitle p {
  text-align: center;
  padding: 2px;
  line-height: 1.1;
}

</style>

<script>
import headerBar from '../components/headerBar.vue'

export default {
  name: 'agendaPage',
  components: {
    headerBar
  },
  data () {
    return {
      agendaA: [
        {
          time: '9:30~',
          theme: '$vuetify.agenda.steps.start',
          class: 'grey lighten-3 text-xs-center align-center'
        },
        {
          time: '10:00~',
          theme: '$vuetify.agenda.steps.poster',
          class: 'blue lighten-4 align-center',
          to: '/panel'
        },
        {
          time: '12:00~',
          theme: '$vuetify.agenda.steps.lunch',
          class: 'grey lighten-3 text-xs-center align-center'
        }
      ],
      agendaB: [
        {
          time: '13:30~',
          theme: 'Opening Remarks',
          ppl: '(CSI) Funaki GM'
        },
        {
          time: '',
          theme: 'Session 1<br />China Regional Strategy & (RDG) Technology',
          ppl: ''
        },
        {
          time: '13:30~',
          theme: 'China Regional Business Strategy',
          ppl: 'Kokubo SVP and Executive Officer, Chief Executive for China Hitachi Gr.'
        },
        {
          time: '13:55~',
          theme: 'Technology Innovation Strategy for Mid-term Management Plan 2021',
          ppl: '(CTI) Sameshima GM'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
