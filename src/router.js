import Vue from "vue";
import Router from "vue-router";
import index from "./views/index.vue";
import agenda from "./views/agenda.vue";
import panel from "./views/panel.vue";
import lunchDinner from "./views/lunch.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: index
    },
    {
      path: "/agenda",
      name: "agendaPage",
      component: agenda
    },
    {
      path: "/panel",
      name: "panelList",
      component: panel
    },
    {
      path: "/lunchdinner",
      name: "lunchDinner",
      component: lunchDinner
    }
  ]
});
