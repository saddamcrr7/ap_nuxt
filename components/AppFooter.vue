<template>
  <div class="o-footer">
    <div class="o-footer__container">
      <div class="o-footer__border" ref="footerBorder"></div>
      <div class="o-footer__nav">
        <div class="o-footer__nav-left">
          <div class="o-footer__backToTop" ref="scrollToTop">
            <AnimetLine>Back to top</AnimetLine>
          </div>
        </div>
        <div class="o-footer__nav-right">
          <ul class="o-footer__nav-list">
            <li class="o-footer__nav-item">
              <a href="#" class="o-footer__nav-link"
                ><AnimetLine>Mail</AnimetLine></a
              >
            </li>
            <li class="o-footer__nav-item">
              <a href="#" class="o-footer__nav-link"
                ><AnimetLine>Behance</AnimetLine></a
              >
            </li>
            <li class="o-footer__nav-item">
              <a href="#" class="o-footer__nav-link"
                ><AnimetLine>Twitter</AnimetLine></a
              >
            </li>
            <li class="o-footer__nav-item">
              <a href="#" class="o-footer__nav-link"
                ><AnimetLine>Linkedin</AnimetLine></a
              >
            </li>
            <li class="o-footer__nav-item">
              <a href="#" class="o-footer__nav-link"
                ><AnimetLine>Instagram</AnimetLine></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  mounted() {
    window.addEventListener("load", () => this.animation());
  },
  methods: {
    animation() {
      const gsap = this.$gsap,
        ScrollTrigger = this.$ScrollTrigger,
        ScrollToPlugin = this.$ScrollToPlugin;

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      const border = this.$refs.footerBorder;

      const borderTl = gsap.timeline({
        defaults: {
          immediateRender: !0,
        },
        scrollTrigger: {
          trigger: border,
          start: "top bottom-=50px",
        },
      });

      borderTl.from(border, {
        xPercent: -100,
        duration: 2,
        ease: "expo",
      });

      this.$refs.scrollToTop.addEventListener("click", () => {
        gsap.to(window, { duration: 1.5, ease: "expo.in", scrollTo: 0 });
      });
    },
  },
  computed: {},
};
</script>
