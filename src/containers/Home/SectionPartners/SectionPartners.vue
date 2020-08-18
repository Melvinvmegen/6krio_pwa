<template lang="pug">
  .section.section-partners(id="section-partners")
    a.section-anchor(id='partners')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold NOS PARTENAIRES
      partners(:partners="partners")
</template>

<script>

import partners from '@/components/Partners/Partners'

export default {
  components: {
    partners
  },
  data () {
    return {
      partners: [
        { logo: 'https://source.unsplash.com/random/150x150', href: '' },
        { logo: 'https://source.unsplash.com/random/150x150', href: '' },
        { logo: 'https://source.unsplash.com/random/150x150', href: '' },
        { logo: 'https://source.unsplash.com/random/150x150', href: '' },
        { logo: 'https://source.unsplash.com/random/150x150', href: '' },
        { logo: 'https://source.unsplash.com/random/150x150', href: '' }
      ]
    }
  }
}
</script>

<style>
  .section-partners {
    background: #fff;
  }
</style>
