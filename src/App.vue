<template lang="pug">
  div#app
    Home
</template>

<script>

import Home from './pages/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  created () {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpdateUI = true
      })
    }
  },
  methods: {
    async update () {
      this.prompt = false
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' })
    }
  }
}
</script>
