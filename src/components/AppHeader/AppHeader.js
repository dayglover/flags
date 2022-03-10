const html = document.querySelector("html");

html.dataset.theme = `theme-light`;

import { mapGetters, mapActions } from "vuex";
// let theme =
export default {
  name: "AppHeader",
  data() {
    return {
      isLightMode: true,
      mode: "",
    };
  },
  mounted() {
    html.dataset.theme = window.localStorage.getItem("mode");
    this.isLightMode = window.localStorage.getItem("state");

    // html.dataset.theme = window.localStorage.getItem("mode");
    // this.toggleMode();
  },

  methods: {
    switchTheme(theme) {
      html.dataset.theme = `theme-${theme}`;
      // this.toggleMode();
      // this.toggleMode();
      // this.mode = html.dataset.theme;
      // window.localStorage.setItem("mode", html.dataset.theme);
      // window.localStorage.setItem("mode", html.dataset.theme);
      // if (html.dataset.theme === "theme-light") {
      //   this.isLightMode = true;
      //   window.localStorage.setItem("state", this.isLightMode);
      // } else if (html.dataset.theme === "theme-dark") {
      //   this.isLightMode = false;
      //   window.localStorage.setItem("state", this.isLightMode);
      // }
      // this.toggleMode();

      window.localStorage.setItem("mode", html.dataset.theme);
      this.toggleMode();
      window.localStorage.setItem("state", !this.isLightMode);
    },
    toggleMode() {
      return (this.isLightMode = !this.isLightMode);
    },
    // ...mapActions(["toggleMode"]),
    // switchMode() {
    //   this.isLightMode = !this.isLightMode;
    // },
  },
  computed: {
    ...mapGetters(["getMode"]),
  },
};
