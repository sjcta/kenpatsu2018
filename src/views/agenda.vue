<template>
  <div>
    <headerBar v-on:childLang = "$emit('changeLang')">{{ $vuetify.t('$vuetify.index.agenda') }}</headerBar>

    <v-content id="agendaPage">
      <v-container fluid>
        <v-card>
          <v-card-text id="info">
            <p class="text-xs-center date headline">{{ $vuetify.t('$vuetify.index.date') }}</p>
            <p class="text-xs-center loca body-2" v-html="$vuetify.t('$vuetify.index.loca')"></p>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import headerBar from '../components/headerBar.vue'

export default {
  name: 'agendaPage',
  components: {
    headerBar
  },
  methods: {
  }
}
</script>
