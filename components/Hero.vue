<template>
  <div class="o-hero">
    <div class="o-hero__container">
      <h1 class="o-hero__title">
        <AnimetLine class="o-hero__line" delay="1">
          Digit<span class="o-hero__title-a">a</span>l <br />
          Designer <br />+Art <br />Director
        </AnimetLine>
        <div class="o-hero__title-icon-wrapper" ref="iconWrapper">
          <downArrow class="o-hero__title-icon" ref="titleIcon" />
        </div>
      </h1>
      <div class="o-hero__bottom">
        <span></span>
        <AnimetLine class="o-hero__bottom-text" delay="1"
          >Selected works</AnimetLine
        >
        <AnimetLine class="o-hero__bottom-text" delay="1">CW(P-01)</AnimetLine>
      </div>
    </div>
  </div>
</template>

<script>
import downArrow from "~/assets/svgs/down-arrow.svg?inline";
export default {
  name: "Hero",

  mounted() {
    window.addEventListener('load', ()=> {
      this.animation()
    })
  },

  methods: {
    animation() {
      const gsap = this.$gsap,
        ScrollTrigger = this.$ScrollTrigger

        const tl = gsap.timeline({
        defaults: {
          immediateRender: true,
        },
        scrollTrigger: {
          trigger: this.$refs.iconWrapper,
          start: "top bottom",
          end: "bottom bottom",
        },
      });

        tl.from(this.$refs.titleIcon, {
          yPercent: 100,
          duration: 1.25,
          delay: 1.5,
          ease: "expo",
      })
    }
  },

  computed: {},

  components: {
    downArrow,
  },
};
</script>
