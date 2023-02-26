<template>
  <div class="o-project-section">
    <div class="o-project-section__container">
      <div class="o-project-section__border" ref="sectionBorder"></div>
      <div class="o-project-section__row">
        <div class="o-project-section__col o-project-section__col--left">
          <h3 class="o-project-section__count">
            <AnimetLine delay="0">{{ count }}</AnimetLine>
          </h3>
          <div class="o-project-section__bottom">
            <div class="o-project-section__tag" v-html="tag"></div>
            <lableArow class="o-project-section__icon" ref="lableArrow" />
          </div>
        </div>
        <div class="o-project-section__col o-project-section__col--right">
          <div class="o-project-section__image">
            <img :src="image" alt="" />
          </div>
        </div>

        <div class="o-project-section__col o-project-section__col--left"></div>
        <div class="o-project-section__col o-project-section__col--right">
          <h2 class="o-project-section__title">
            <client-only>
              <AnimetLine v-html="title" delay="0"> </AnimetLine>
            </client-only>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lableArow from "~/assets/svgs/label-arrow.svg?inline";

export default {
  name: "ProjectSection",

  props: {
    image: "",
    title: "",
    count: "",
    tag: "",
  },

  mounted() {
    window.addEventListener("load", () => {
      this.animation();
    });
  },

  methods: {
    animation() {
      const gsap = this.$gsap,
        ScrollTrigger = this.$ScrollTrigger,
        DrawSVGPlugin = this.$DrawSVGPlugin;

      gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

      const border = this.$refs.sectionBorder;
      const svgPath = this.$refs.lableArrow.querySelector(".js-path-1-d");

      const borderTl = gsap.timeline({
        defaults: {
          immediateRender: true,
        },
        scrollTrigger: {
          trigger: border,
          start: "top bottom-=50px",
        },
      });

      const svgPathTl = gsap.timeline({
        defaults: {
          immediateRender: !0,
        },
        scrollTrigger: {
          trigger: svgPath,
          start: "top bottom-=50px",
        },
      });

      borderTl.from(border, {
        xPercent: -100,
        duration: 2,
        ease: "expo",
      });

      svgPathTl.from(svgPath, {
        drawSVG: 0,
        ease: "expo",
        duration: 1.5,
      });
    },
  },

  computed: {},

  components: { lableArow },
};
</script>
