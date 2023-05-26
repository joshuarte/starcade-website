function returnLanguage(lang: string) {
  switch (lang) {
    case "it":
      return "it-IT";
    case "en":
      return "en-GB";
    default:
      return "it-IT";
  }
}

export const useLanguages = defineStore("languages", {
  state: () => ({
    activeLocale: "it-IT",
  }),

  actions: {
    changeLang(payload: string) {
      this.activeLocale = returnLanguage(payload);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLanguages, import.meta.hot));
}
