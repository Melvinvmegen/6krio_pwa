<template lang="pug">
  .partners
    .partner(v-for="partner in partners")
      a(:href="partner.href")
        img(:src="partner.logo")
</template>

<script>

export default {
  props: {
    partners: Array
  }
}
</script>

<style>
  .partners {
    display: flex;
    margin-top: 30px;
  }

  .partner {
    width: 16.66%;
    display: flex;
    justify-content: center;
  }
</style>
