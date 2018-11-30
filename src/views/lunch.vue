<template>
  <div>
    <headerBar v-on:childLang="$emit('changeLang')">{{ $vuetify.t('$vuetify.index.lunchDinner') }}</headerBar>

    <v-content id="panelList">
      <v-container fluid>
        <v-card color="white" class="lunch">
          <v-card-title primary-title>
            <div>
              <div class="headline white--text">{{ $vuetify.t('$vuetify.lunchDinner.lunch') }}</div>
              <span class=" white--text">12:00 - 13:30</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <div class="d-flex"> 
              <v-icon large color="darken-2">location_on</v-icon>
              <span>Wenjin Hotel 2F Reno Café (buffet)</span>
            </div>
          </v-card-actions>
        </v-card>

        <v-card color="white" class="dinner">
          <v-card-title primary-title>
            <div>
              <div class="headline white--text">{{ $vuetify.t('$vuetify.lunchDinner.dinner') }}</div>
              <span class=" white--text">18:30 ~ 20:00</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <div class="d-flex"> 
              <v-icon large color="dark-1">location_on</v-icon>
              <span>Wenjin Hotel 5F</span>
            </div>
          </v-card-actions>
        </v-card>


      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
.v-card__title {
  align-items: flex-start;
  height: 150px;
  padding-left: 50px;
}
.v-card.lunch .v-card__title {
  background: #FFF url('../assets/bg_lunch.png') no-repeat right top;
  background-size: 100% auto;
}
.v-card.dinner .v-card__title {
  background: #FFF url('../assets/bg_dinner.png') no-repeat right top;
  background-size: 100% auto;
}
.v-card__title div {
  width: 100%;
}
.v-card__actions {
  padding-bottom: 30px;
  justify-content:flex-start;
}
.v-card__actions .d-flex {
  justify-content: center;
  align-content: center;
  padding-left: 10px;
}
.v-card__actions span {
  line-height: 3;
}
</style>

<script>
import headerBar from "../components/headerBar.vue";

export default {
  components: {
    headerBar
  }
};
</script>