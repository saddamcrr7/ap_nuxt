<template>
  <div class="c-animaetLine" ref="animetLine">
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: "AnimetLine",

  props: {
    delay: 0,
  },

  mounted() {
    setTimeout(() => {
      this.animation();
    }, 100);
  },

  methods: {
    animation() {
      const gsap = this.$gsap,
        ScrollTrigger = this.$ScrollTrigger

      gsap.registerPlugin(ScrollTrigger, SplitText);

      const st = new SplitText(this.$refs.animetLine, { type: "lines" });

      st.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("c-animaetLine__wrapper");
        wrapper.appendChild(line);
        this.$refs.animetLine.appendChild(wrapper);
      });

      const tl = gsap.timeline({
        defaults: {
          immediateRender: !0,
        },
        scrollTrigger: {
          trigger: this.$refs.animetLine,
          start: "top bottom",
          end: "bottom bottom",
        },
      });

      tl.from(st.lines, {
        yPercent: 100,
        duration: 1.25,
        stagger: 0.1,
        ease: "expo",
        delay: this.delay,
      });
    },
  },

  computed: {},
};
</script>
