export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        { rel: "manifest", href: "/manifest.json" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-icon-192x192.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/apple-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-icon-180x180.png",
        },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
        { name: "theme-color", content: "#ffffff" },
      ],
      script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=G-BWTRXSC97S" },
        { src: "https://unpkg.com/@rive-app/canvas@1.0.98", ssr: true },
      ],
      titleTemplate: "%pageTitle %titleSeparator %siteName",
    },
  },

  plugins: ["~/plugins/ga.client.js"],

  modules: [
    "@nuxtjs/prismic",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/robots",
    "nuxt-delay-hydration",
    "@nuxtjs/i18n",
    "@dargmuesli/nuxt-cookie-control",
    "nuxt-purgecss",
  ],
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    display: "swap",
    families: {
      Nunito: [200, 400, 1000],
      "PT+Sans": [400],
    },
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
    mode: "mount",
  },
  purgecss: {
    enabled: false, // Always enable purgecss
    safelist: [".cookieControl"], // Add my-class token to the safelist (e.g. .my-class)
  },
  prismic: {
    endpoint: "https://starcade-website.cdn.prismic.io/api/v2",
  },
  cookieControl: {
    barPosition: "bottom-left",
    locales: ["en", "it"],
    // Translations to override.
    localeTexts: {
      en: {
        save: "Remember",
      },
      it: {
        save: "Ricorda",
      },
    },
    cookies: {
      necessary: [
        {
          description: {
            en: "Used for cookie control.",
            it: "Usato per il controllo dei cookies.",
          },
          id: `getCookieId(cookie)`,
          name: {
            en: "Google Analytics", // you always have to specify a cookie name (in English)
            it: "Google Analytics", // you always have to specify a cookie name (in English)
          },
          src: "https://www.googletagmanager.com/gtag/js?id=G-BWTRXSC97S",
          targetCookieIds: [
            "cookie_control_consent",
            "cookie_control_enabled_cookies",
          ],
        },
      ],
      optional: [
        {
          description: {
            en: "Mailchimp cookie and settings control.",
            it: "Impostazioni e controlli per i cookie di Mailchimp",
          },
          id: `getCookieId(cookie)`,
          name: {
            en: "MailChimp", // you always have to specify a cookie name (in English)
            it: "MailChimp", // you always have to specify a cookie name (in English)
          },
          src: "https://starcade.us9.list-manage.com/subscribe?u=91cb3cb624c4ac924aee78508&id=737b32db7f",
          targetCookieIds: ["hubspotuk"],
        },
        {
          description: {
            en: "Prismic cookie and settings control.",
            it: "Impostazioni e controlli per i cookie di Prismic",
          },
          id: `getCookieId(cookie)`,
          name: {
            en: "Prismic", // you always have to specify a cookie name (in English)
            it: "Prismic", // you always have to specify a cookie name (in English)
          },
          src: "https://starcade-website.prismic.io/",
          targetCookieIds: ["prismic-auth"],
        },
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "it",
        name: "Italian",
      },
    ],
    defaultLocale: "it",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  devtools: {
    enabled: true,
  },
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://www.starcade.it",
      siteName: "STARCADE",
      siteDescription: "Never. Stop. Play.",
      language: "it-IT",
      titleSeparator: "|",
    },
  },
});
