<template>
    <main>
        <slot />
        <PrismicRichText :field="home.data.landing_text" class="paragraph"/>
        <div class="cta">
            <a class="button" href="http://eepurl.com/ijMGCr">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 486.773 486.773">
                    <path
                        d="M486.44 121.532a6.821 6.821 0 0 0-5.506-4.642l-38.2-5.552-17.084-34.614a6.82 6.82 0 0 0-12.232 0l-17.083 34.615-38.2 5.552a6.819 6.819 0 0 0-3.779 11.632l27.642 26.944-6.525 38.045a6.821 6.821 0 0 0 9.896 7.19l34.167-17.962 34.167 17.962a6.82 6.82 0 0 0 9.896-7.19l-6.525-38.045 27.642-26.944a6.83 6.83 0 0 0 1.724-6.991z" />
                    <path
                        d="M421.683 212.112v156.957c0 2.357-.662 4.506-1.641 6.487L314.513 270.02l49.358-49.357c-.124-.088-.254-.163-.377-.252-9.181-6.668-14.012-17.448-12.986-28.601L230.375 311.943c-2.463 2.463-6.749 2.463-9.213 0L57.337 148.112h281.3l-1.729-1.686c-7.632-7.438-10.95-17.911-9.16-28.168H44.779C20.087 118.259 0 138.346 0 163.039v206.03c0 24.693 20.087 44.781 44.779 44.781h361.976c24.694 0 44.781-20.088 44.781-44.781V226.021a31.937 31.937 0 0 1-9.468-3.19l-20.385-10.719zM31.485 375.557c-.97-1.981-1.631-4.131-1.631-6.487V163.04c0-.058.029-.102.029-.159l107.141 107.14L31.485 375.557zm33.775 8.44 92.872-92.869 41.922 41.924c6.874 6.872 16.007 10.654 25.714 10.654 9.709 0 18.841-3.782 25.715-10.654l41.924-41.924 92.86 92.869H65.26z" />
                </svg>
                NEWSLETTER
            </a>
            <a class="button" href="https://www.instagram.com/starcadeproductions/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" />
                    <path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                    <path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.636 7h.012" />
                </svg>
                INSTAGRAM
            </a>
        </div>
        <div class="socials">
            <a rel="me" href="https://mastodon.uno/@starcade" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24">
                    <path
                        d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z" />
                </svg>
            </a>
            <a class="socials__twitter" href="https://twitter.com/StarcadeProd" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-20 0 190 190">
                    <path fill="none" fill-rule="evenodd"
                        d="M109.75 92.27C110 130.1 78 156.89 27.38 136.15c11.78-1.66 20.54-5 27-9.19-7.07-2.57-16.1-11.47-18.19-16.25l8.11-1.35s-9.08-9.09-11.59-19.26l10.12 1.38s-5.71-8.46-4-23.61C45.85 79.38 59.4 89.22 71.45 92 70 67 94 62.51 104.66 75.05l14.9-2.35-7.15 9.23 10.21 3.49-12.87 6.85Z"
                        clip-rule="evenodd" />
                </svg>
            </a>
            <a href="https://instagram.com/starcadeproductions" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fill="#none"
                        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Zm5.92-9c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21a.995.995 0 0 1-1.09-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38Z" />
                </svg>
            </a>
            <a href="mailto:info@starcade.it">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 30">
                    <g clip-path="url(#a)">
                        <path fill="none"
                            d="M18.899 16.226c0-.747-.024-1.373-.024-1.952 0-6.914.698-7.323 5.059-7.323h.337c.361 0 .723-.024 1.084-.024.723 0 1.494.192 2.265.337 3.011.554 3.131 2.963 3.131 5.589 0 .386-.024.747-.024 1.108v.193c0 1.036-.048 2.843-1.011 2.915-2 0-1.253-1.35-1.614-2.602-.747-2.481-1.494-3.59-3.783-3.59-.144 0-.289.025-.433.025-.145 0-.29-.024-.434-.024-3.011 0-2.963 2.433-2.963 4.673 0 3.349 1.349 4.12 3.469 4.12 1.084 0 2.192-.024 3.108-.675.096-.072.192-.12.265-.12.265 0 .626.53 1.108.53 1.662-.145 2.818-.338 3.854-1.422.843-.867.843-4.746.843-6.625 0-1.228-.289-6.793-2.963-7.54-2.144-.578-3.758-.65-5.757-.819-1.18.024-2.482.217-3.686.361-1.71.193-3.903.386-4.047 2.433-.217 2.77-.578 5.999-.578 8.962 0 1.47.096 3.011.168 4.505.12 1.132.434 2.168.578 3.252.53 3.71 3.132 3.855 5.517 4.481.916.313 2.41.361 3.493.361 3.011 0 5.686-.987 5.686-3.445 0-.843-.121-3.083-.796-3.083-.554 0-1.638.289-1.686.747 0 .53.048 1.036.048 1.59 0 .963-.674 1.782-1.83 1.782-2.458 0-4.072-.216-5.903-1.18-2.842-1.47-2.433-5.252-2.481-7.54Zm6.432-.843c-.096.337-.096 1.18-.77 1.18-1.181 0-1.205-1.229-1.205-2.216 0-.675.337-.916 1.276-.916.675.072.579.94.7 1.952Z" />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#none" d="M50 0v30H0V0z" />
                        </clipPath>
                    </defs>
                </svg>
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
        width: 30px;
        height: 30px;
        padding: 10px;
        transition: all .2s ease-in-out;
        border: 3px solid #F3FAEF;

        svg,
        svg path {
            fill: #2C4066;
        }

        &:hover {
            background: #2C4066;

            svg,
            svg path {
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
        height: 25px;
        margin-right: 15px;
    }

    &:hover {
        color: #F3FAEF;
        background: #2C4066;

        svg {
            fill: #F3FAEF;
            stroke: #F3FAEF;
        }
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