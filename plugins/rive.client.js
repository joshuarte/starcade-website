import { defineNuxtPlugin } from '#app' 
export default defineNuxtPlugin((nuxtApp) => {
  new rive.Rive({
    src: "https://www.starcade.it/rives/starcade-intro.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true
  });
});