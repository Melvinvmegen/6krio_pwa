<template lang="pug">
  .logo
    img(:src="whitelogo" alt="" class="" v-if="color")
    img(:src="defaultlogo" alt="" class="" v-else)
</template>

<script>
import Logo from './6KLABEL.png'
import WhiteLogo from './6KLABELw.png'

export default {
  props: {
    color: String
  },
  data () {
    return {
      defaultlogo: Logo,
      whitelogo: WhiteLogo
    }
  }

}
</script>

<style>
  .logo img {
    width: 150px;
    height: 150px;
    margin-left: 10px;
  }
</style>
