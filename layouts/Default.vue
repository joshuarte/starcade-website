<template>
    <!-- <h2>Get ready to blast off into the gaming galaxy! </h2> -->
    <main>
        <slot />
    </main>
    <p>Get ready to blast off into the gaming galaxy!<br><br>
        Starcade's website is currently under construction,
        but sign up for our newsletter to stay informed about our next launch and receive exclusive intergalactic
        goodies.
    </p>
    <newsletter-form @subscribed="log" headerText="Cool Newsletter" buttonText="Join in!" inputPlaceholder="Your email">
        <template #description>
            <p>My Newsletter Description</p>
        </template>
        <template #button-icon>
            <!-- icon component -->
        </template>
    </newsletter-form>
</template>

<style lang="scss" scoped>
h2 {
    font-family: "Hogfish DEMO", sans-serif;
    max-width: 300px;
    line-height: 1.25;
    margin: 0 auto;
}

p {
    font-family: "Montserrat", sans-serif;
    max-width: 500px;
    font-weight: 300;
}

p,
h2 {
    text-align: center;
    color: white;
}

.newsletter-form {
    font-family: sans-serif;
    background-color: #003543;
    border-radius: 4px;
    padding: 9px;
    width: fit-content;
}

.newsletter-form__button {
    background-color: #00DC82;
    color: #003543;
    border-radius: 4px;
    border: none;
    padding: 8px;
    margin: 8px;
}

.newsletter-form__header {
    color: white;
    margin: 8px;
}

.newsletter-form__input {
    border-radius: 4px;
    color: #92adad;
    padding: 8px;
    background-color: #003543;
    margin: 8px;
    border: 2px solid #00DC82;
}
</style>

<script lang="ts" setup>

const log = (e) => {
    console.log(e)
}
</script>