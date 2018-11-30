<template>
  <div>
    <headerBar v-on:childLang="$emit('changeLang')">{{ $vuetify.t('$vuetify.index.lunchDinner') }}</headerBar>

    <div id="lunchDinner">
      <h1>lunch</h1>

      <h1>Dinner</h1>
    </div>
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