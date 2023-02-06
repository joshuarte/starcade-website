import { defineNuxtPlugin } from '#app' 
export default defineNuxtPlugin((nuxtApp) => {
  new rive.Rive({
    src: "/rives/starcade-intro.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true
  });
});