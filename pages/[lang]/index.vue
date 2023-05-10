import LogoPlaceholder from '~~/components/LogoPlaceholder.vue';

<template>
  <LogoPlaceholder src="~/assets/rives/starcade-intro.riv"></LogoPlaceholder>
  <PrismicRichText :field="home.data.landing_text" class="paragraph" />
  <!-- {{ home.alternate_languages }} -->
  <NuxtLink to="/en-GB">
    Switch to Eng
  </NuxtLink>
  <NuxtLink to="">
    Switch to Ita
  </NuxtLink>
  <div class="cta">
    <a class="button" href="http://eepurl.com/ijMGCr">
      <Icon class="icon" name="mdi:email-newsletter" size="24" />
      NEWSLETTER
    </a>
    <a
      class="button"
      href="https://www.instagram.com/starcadeproductions/"
      target="_blank"
    >
      <Icon class="icon" name="ph:instagram-logo-fill" size="24" />
      INSTAGRAM
    </a>
  </div>
  <div class="socials">
    <a rel="me" href="https://mastodon.uno/@starcade" target="_blank">
      <Icon class="icon" name="mdi:mastodon" size="24" />
    </a>
    <a href="https://linkedin.com/company/starcadeproductions" target="_blank">
      <Icon class="icon" name="mdi:linkedin" size="24" />
    </a>
    <a
      class="socials__twitter"
      href="https://twitter.com/StarcadeProd"
      target="_blank"
    >
      <Icon class="icon" name="uil:twitter" size="24" />
    </a>
    <a href="https://instagram.com/starcadeproductions" target="_blank">
      <Icon class="icon" name="ph:instagram-logo-fill" size="24" />
    </a>
    <a href="mailto:info@starcade.it">
      <Icon class="icon" name="bx:bxs-paper-plane" size="24" />
    </a>
  </div>
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
  margin-top: 100px;

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
const { client } = usePrismic();
const route = useRoute();

const { data: home } = await useAsyncData("home", async () => {
  const document = await client.getSingle("home", { lang: route.params.lang });

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>
