<template>
    <main>
        <slot />
    </main>
    <p>Get ready to blast off into the gaming galaxy!<br><br>
        Starcade's website is currently under construction,
        but sign up for our newsletter to stay informed about our next launch and receive exclusive intergalactic
        goodies.
    </p>
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

.cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 20px;
    margin-top: 45px;
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
console.log(":･ﾟ✧:･.☽˚｡･ﾟ✧:･.: STARCADE :･ﾟ✧:･.☽˚｡･ﾟ✧:･.:")
</script>