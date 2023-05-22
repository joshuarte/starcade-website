import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin({
  name: "rive",
  enforce: "pre", // or 'post'
  async setup(nuxtApp) {
    const riveInstance = new rive.Rive({
      src: "/rives/starcade-intro-2.riv",
      canvas: document.getElementById("canvas"),
      autoplay: true,
    });
    return riveInstance;
  },
  hooks: {
    // You can directly register Nuxt app hooks here
    "link:prefetch"() {
      const nuxtApp = useNuxtApp();
      console.log("REFRESH");
      const riveInstance = new rive.Rive({
        src: "/rives/starcade-intro-2.riv",
        canvas: document.getElementById("canvas"),
        autoplay: true,
      });
      console.log(this.riveInstance);
      riveInstance.reset();
    },
  },
});
