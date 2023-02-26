<template>
  <div class="o-about-hero">
    <div class="o-about-hero__bg">
      <div class="o-about-hero__image-wrapper" ref="imageWrapper">
        <div class="o-about-hero__image-inner" ref="imageInner">
          <img
            src="~/assets/images/d83a9eb3a9d052d316c41ac1cad44895473c69fa-1416x1796.webp"
            alt=""
            class="o-about-hero__image"
          />
        </div>
      </div>
    </div>
    <div class="o-about-hero__container">
      <h1 class="o-about-hero__title">
        <AnimetLine>
          UI+UX <br />
          Design <br />
          Brand <br />
          Website
        </AnimetLine>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutHero",

  mounted() {
    this.animation();
  },

  methods: {
    animation() {
      const gsap = this.$gsap,
        ScrollTrigger = this.$ScrollTrigger,
        inner = this.$refs.imageInner,
        wrapper = this.$refs.imageWrapper;

      gsap.set(wrapper, { height: inner.clientHeight });

      const tl = gsap.timeline({
        defaults: {
          immediateRender: !0,
        },
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          scrub: .4,
        },
      });

      tl.fromTo(wrapper, {yPercent: 0},{ yPercent: -10 });
    },
  },

  computed: {},

  components: {},
};
</script>
