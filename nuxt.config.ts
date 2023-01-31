export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    'nuxt-newsletter'
  ],
  newsletter: {
    mailchimp: {
      apiKey: process.env.MAILCHIMP_API_KEY,
      serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX,
      audienceId: process.env.MAILCHIMP_AUDIENCE_ID,
      component: true // optional
    }
  }
};
