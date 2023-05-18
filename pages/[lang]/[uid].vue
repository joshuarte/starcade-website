import LogoPlaceholder from '~~/components/LogoPlaceholder.vue';

<template>
  <LogoPlaceholder src="~/assets/rives/starcade-intro.riv"></LogoPlaceholder>
  {{ page }}
  <PrismicRichText :field="page.data.landing_text" class="paragraph" />
</template>

<style>
body {
  background: #2c4066;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss" scoped>
.lang-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 20px;

  a {
    display: block;

    &:hover {
      opacity: 0.8;
    }
  }
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
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 150px;
    background: #f3faef;
    color: #2c4066;
    width: 30px;
    height: 30px;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    border: 3px solid #f3faef;

    &:hover {
      background: #2c4066;
      color: #f3faef;

      svg {
        fill: #f3faef;
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    position: absolute;
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
  background: #f3faef;
  color: #2c4066;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  outline: 0;
  border: 5px solid #b2d9db;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 35px;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  svg {
    margin-right: 15px;
  }

  &:hover {
    color: #f3faef;
    background: #2c4066;
  }
}
</style>

<script setup>
useHead({
  title: "Welcome",
});
/* reloadNuxtApp(); */
const { client } = usePrismic();
const route = useRoute();

const { data: page } = await useAsyncData("page", async () => {
  const document = await client.getByUID("page", route.params.uid, {
    lang: route.params.lang,
  });

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>
