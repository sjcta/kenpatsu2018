<template>
    <v-toolbar app dark scroll-off-screen>
      <v-btn flat color="white" class="backTop" to="/">
        <v-icon left large>chevron_left</v-icon>
      </v-btn>
      <v-toolbar-title class="title text-uppercase ">
        <span class="text-xs-center"><slot></slot></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outline color="white" @click="$emit('childLang')"><span>{{$vuetify.t('$vuetify.header.lang')}}</span></v-btn>
    </v-toolbar>
</template>

<style scoped>
  .backTop {
    min-width: 40px;
    padding: 0;
  }
  .backTop .v-icon {
    margin: 0;
  }
  .title {
    width: 100%;
    text-align: center;
    margin-left: 0;
  }
</style>
