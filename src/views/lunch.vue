<template>
  <div>
    <headerBar v-on:childLang="$emit('changeLang')">{{ $vuetify.t('$vuetify.index.lunchDinner') }}</headerBar>

    <v-content id="panelList">
      <v-container fluid>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline text-xs-center">{{ $vuetify.t('$vuetify.lunchDinner.lunch') }}</div>
              <span class="text-xs-center grey--text">12:00 - 13:30</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark>Listen now</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
</style>

<script>
import headerBar from "../components/headerBar.vue";

export default {
  components: {
    headerBar
  }
};
</script>