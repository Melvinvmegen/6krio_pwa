<template lang="pug">
  .social-media-icons
    a(v-for="icon in icons" :href="icon.href" :class="{white: color}")
      i.icon.fab(:class="icon.icon")
</template>

<script>

export default {
  props: {
    color: String,
    icons: Array
  }
}
</script>

<style>
  .social-media-icons {
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    margin: 0 auto;
  }

  .social-media-icons .white {
    color: #fff !important;
    font-size: 25px
  }
</style>
