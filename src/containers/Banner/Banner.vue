<template lang="pug">
  .section-home
    .blocks-hero(id="first-child")
      .main-container
        BannerLeft
        BannerRight(v-if="this.$vuetify.breakpoint.lg ||this.$vuetify.breakpoint.md")

</template>

<script>

import BannerLeft from './BannerLeft/BannerLeft'
import BannerRight from './BannerRight/BannerRight'

export default {
  components: {
    BannerLeft,
    BannerRight
  }
}
</script>

<style>
  .section-home {
    padding: 0;
  }

  #first-child {
    padding: 100px;
  }

  .blocks-hero {
    position: relative;
    padding: 0;
    height: 80vh;
    background-color: #000 !important;
    border-bottom: 2px #000;
    box-shadow: inset -4px -10px 50px rgba(76, 189, 184, 0.1);
    min-height: 800px;
  }

  .main-container {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  @media (min-width: 1250px) {

  }

  @media (max-width: 1024px) {
    .main-container {
      max-width: 900px;
    }
  }

  @media (max-width: 960px) {
    .header {
      width: 100% !important;
    }
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 500px) {
    #first-child {
      padding: 50px !important;
    }
  }

  @media (max-width: 400px) {
    #first-child {
      padding: 20px !important;
    }
  }
</style>
