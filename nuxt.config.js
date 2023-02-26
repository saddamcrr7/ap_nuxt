export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  transition: {
    name: "test",
    mode: "out-in",
    afterLeave(el) {
      console.log("afterLeave", el);
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ap_nuxt2023",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/scripts/@gsap/shockingly/dist/SplitText.js",
        body: true,
      },
      {
        src: "/scripts/@gsap/shockingly/dist/DrawSVGPlugin.js",
        body: true,
      },
    ],
  },

  styleResources: {
    // your settings here
    scss: ["@/assets/styles/index.scss"],
  },

  googleFonts: {
    preconnect: true,
    // prefetch: true,
    preload: true,
    families: {
      Manrope: {
        wght: [400, 500, 600, 700, 800],
      },

      "Roboto+Mono": {
        wght: [400, 800],
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-gsap-module",
    "@nuxtjs/style-resources",
    "@nuxtjs/google-fonts",
  ],

  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      text: true,
    },
    extraEases: {
      customEase: true,
      expoScaleEase: false,
      roughEase: false,
      slowMo: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/svg",
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [],

    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
    },
  },
};
