<template>
  <transition name="test" mode="out-in">
    <main>
      <AboutHero />
      <AboutContent />
      <AboutSocial />
    </main>
  </transition>
</template>

<script>
export default {
  name: "AboutPage",
  layout: "about",

  data() {
    return {};
  },
};
</script>
