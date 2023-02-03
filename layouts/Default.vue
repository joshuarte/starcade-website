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
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24">
                    <path
                        d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z" />
                </svg>
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