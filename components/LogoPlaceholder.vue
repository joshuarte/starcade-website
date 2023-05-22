<template>
  <div className="placeholder-logo">
    <canvas ref="canvas" id="canvas" width="500" height="500"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.placeholder-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 250px;
  margin: 0 auto;
  left: 0;
  right: 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 500px;
  }

  canvas {
    max-width: 100%;
    width: 100%;

    @media screen and (min-width: 1024px) {
      max-height: none;
    }
  }
}
</style>

<script lang="ts">
import pkg from "node_modules/@rive-app/canvas/rive.js";
const { Rive } = pkg;

export default defineComponent({
  name: "Rive",
  props: {
    src: String,
  },
  mounted() {
    new Rive({
      canvas: this.$refs.canvas,
      src: "../rives/starcade-intro-2.riv",
      autoplay: true,
    });
  },
});
</script>
