<template>
  <div class="o-about-social">
    <div class="o-about-social__container">
      <div class="o-about-social__row">
        <div class="o-about-social__col o-about-social__col--left">
          <div class="o-about-social__subtitle">
            Contact <br />
            Details
          </div>
          <lableArow class="o-about-social__icon"/>
        </div>
        <div class="o-about-social__col o-about-social__col--right">
          <ul class="o-about-social__list">
            <li class="o-about-social__item">
              <a href="#" class="o-about-social__link" data-text="Mail"><AnimetLine>Mail</AnimetLine></a>
            </li>
            <li class="o-about-social__item">
              <a href="#" class="o-about-social__link" data-text="Instagram"
                ><AnimetLine>Instagram</AnimetLine></a
              >
            </li>
            <li class="o-about-social__item">
              <a href="#" class="o-about-social__link" data-text="Linkedin"
                ><AnimetLine>Linkedin</AnimetLine></a
              >
            </li>
            <li class="o-about-social__item">
              <a href="#" class="o-about-social__link" data-text="Twitter"
                ><AnimetLine>Twitter</AnimetLine></a
              >
            </li>
            <li class="o-about-social__item">
              <a href="#" class="o-about-social__link" data-text="Behance"
                ><AnimetLine>Behance</AnimetLine></a
              >
            </li>
            <li class="o-about-social__item">
              <a href="#" class="o-about-social__link" data-text="Dribbble"
                ><AnimetLine>Dribbble</AnimetLine></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lableArow from "~/assets/svgs/label-arrow.svg?inline";

export default {
  name: "AboutSocial",

  mounted() {},

  methods: {},

  computed: {},

  components: { lableArow },
};
</script>
