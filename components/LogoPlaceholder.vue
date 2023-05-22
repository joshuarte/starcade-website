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

<script setup lang="ts">
// alternatively, you can also use it here
const { $riveInstance } = useNuxtApp();

const riveInstance = $riveInstance;

console.log(riveInstance);
</script>
