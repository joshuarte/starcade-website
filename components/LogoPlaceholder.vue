
<template>
    <div class="placeholder-logo">
        <canvas ref="canvas" id="canvas" width="1920" height="1080"></canvas>
    </div>
</template>

<style lang="scss" scoped>
.placeholder-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    left: 0;
    right: 0;

    canvas {
        max-width: 100%;
    }

    @media screen and (min-width: 768px) {
        height: 350px;
    }

    @media screen and (min-width: 1024px) {
        height: 400px;
    }
}
</style>

