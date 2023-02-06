<template>
    <main>
        <slot />
        <PrismicRichText :field="home.data.landing_text" class="paragraph"/>
        <div class="cta">
            <a class="button" href="http://eepurl.com/ijMGCr">
                <Icon class="icon" name="mdi:email-newsletter" size="24"/>
                NEWSLETTER
            </a>
            <a class="button" href="https://www.instagram.com/starcadeproductions/" target="_blank">
                <Icon class="icon" name="ph:instagram-logo-fill" size="24"/>
                INSTAGRAM
            </a>
        </div>
        <div class="socials">
            <a rel="me" href="https://mastodon.uno/@starcade" target="_blank">
                <Icon class="icon" name="mdi:mastodon" size="24"/>
            </a>
            <a href="https://linkedin.com/company/starcadeproductions" target="_blank">
                <Icon class="icon" name="mdi:linkedin" size="24"/>
            </a>
            <a class="socials__twitter" href="https://twitter.com/StarcadeProd" target="_blank">
                <Icon class="icon" name="uil:twitter" size="24"/>
            </a>
            <a href="https://instagram.com/starcadeproductions" target="_blank">
                <Icon class="icon" name="ph:instagram-logo-fill" size="24"/>
            </a>
            <a href="mailto:info@starcade.it">
                <Icon class="icon" name="bx:bxs-paper-plane" size="24"/>
            </a>
        </div>
    </main>

</template>

<style lang="scss" scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    height: 100vh;
    flex-direction: column;
}

h2 {
    font-family: "Hogfish DEMO", sans-serif;
    max-width: 300px;
    line-height: 1.25;
    margin: 0 auto;
}

.paragraph {
    font-family: "Montserrat", sans-serif;
    max-width: 500px;
    font-weight: 300;
}

.paragraph,
h2 {
    text-align: center;
    color: white;
}

.cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    margin-top: 45px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
}

.socials {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 2em;
    display: flex;
    justify-content: center;
    gap: 15px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 150px;
        background: #F3FAEF;
        color: #2C4066;
        width: 30px;
        height: 30px;
        padding: 10px;
        transition: all .2s ease-in-out;
        border: 3px solid #F3FAEF;

        &:hover {
            background: #2C4066;
            color: #F3FAEF;

            svg {
                fill: #F3FAEF;
            }
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        right: 1.5em;
        left: auto;
        top: 1.5em;
        bottom: auto;
        flex-direction: column;
    }
}

.button {
    width: 100%;
    background: #F3FAEF;
    color: #2C4066;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    outline: 0;
    border: 5px solid #B2D9DB;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 35px;
    transition: all .2s ease-in-out;

    svg {
        margin-right: 15px;
    }

    &:hover {
        color: #F3FAEF;
        background: #2C4066;
    }
}
</style>

<script setup>
const { client } = usePrismic()
const { data: home } = await useAsyncData('home', () => client.getSingle('home'))
</script>

<script>
console.log(":･ﾟ✧:･.☽˚｡･ﾟ✧:･.: STARCADE :･ﾟ✧:･.☽˚｡･ﾟ✧:･.:")
</script>