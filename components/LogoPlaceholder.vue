
<template>
    <div class="placeholder-logo">
        <canvas ref="canvas" id="canvas" width="500" height="500"></canvas>
    </div>
</template>

<style lang="scss" scoped>
.placeholder-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 360px;
    margin: 0 auto;
    left: 0;
    right: 0;

    svg {
        width: 100%;
        max-width: 500px;
    }

    @media screen and (min-width: 768px) {
        max-width: 600px;

        svg {
            width: 100%;
            max-width: 600px;
        }
    }

    @media screen and (min-width: 1024px) {
        max-width: 500px;
    }
}
</style>

