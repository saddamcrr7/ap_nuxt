<template>
  <div class="c-navbar">
    <NuxtLink :to="'/'" class="c-navbar__brand">Chris Wilcock ©</NuxtLink>

    <nav class="c-navbar__nav">
      <ul class="c-navbar__nav-list">
        <li class="c-navbar__nav-item">
          <NuxtLink :to="'/about'" data-text="About" class="c-navbar__nav-link"
            ><div class="c-navbar__item-text">About</div></NuxtLink
          >
        </li>
        <li class="c-navbar__nav-item">
          <NuxtLink :to="'/'" data-text="Cases" class="c-navbar__nav-link"
            ><div class="c-navbar__item-text">Cases</div></NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'Navbar',

  mounted() {
    const $navbar = document.querySelector('.c-navbar')

    setTimeout(()=> {
        $navbar.classList.add('is-load')
    }, 1000)
  },

  methods: {

  },

  computed: {

  }
}
</script>