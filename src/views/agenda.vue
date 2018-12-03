<template>
  <div>
    <headerBar v-on:childLang = "$emit('changeLang')">{{ $vuetify.t('$vuetify.index.agenda') }}</headerBar>

    <v-content id="agendaPage">
      <v-container fluid>
        <v-list dense>
          <v-list-tile v-for="(item, index) in agendaA" :key="'part' + index" class="agendaPart">
            <v-list-tile-content class="timeFrom">{{ item.time }}</v-list-tile-content>
            <v-list-tile-content class="align-start" v-html="$vuetify.t(item.theme)" :class="item.type"></v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
#agendaPage .v-list--dense .v-list__tile {
    padding-right: 5px;
}
#agendaPage .timeFrom {
  width: 80px;
  flex: none;
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
          time: '9:30-',
          theme: '$vuetify.agenda.steps.start',
          type: 'grey'
        },
        {
          time: '10:00-',
          theme: '$vuetify.agenda.steps.poster',
          type: 'link',
          to: '/panel'
        },
        {
          time: '12:00-',
          theme: '$vuetify.agenda.steps.lunch',
          type: 'grey'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
