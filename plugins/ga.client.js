import { defineNuxtPlugin } from "#app";
import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  /*   const getGDPR = localStorage.getItem("GDPR:accepted");
   */
  nuxtApp.vueApp.use(
    VueGtag,
    {
      property: {
        id: "G-BWTRXSC97S",
      },
      appName: "Starcade Website",
      enabled: "false",
      pageTrackerScreenviewEnabled: true,
    },
    nuxtApp.vueApp.router
  );
});
