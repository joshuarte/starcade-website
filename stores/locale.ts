const delay = (t: number) => new Promise((r) => setTimeout(r, t));

export const useLocale = defineStore("locale", {
  state: () => ({
    defaultLocale: "it-IT",
    alternateLanguages: [],
    settings: {},
    navigation: {}
  }),
 
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocale, import.meta.hot));
}
