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
        { name: '1', logo: 'https://source.unsplash.com/random/200x200', href: '' },
        { name: '2', logo: 'https://source.unsplash.com/random/200x200', href: '' },
        { name: '3', logo: 'https://source.unsplash.com/random/200x200', href: '' },
        { name: '4', logo: 'https://source.unsplash.com/random/200x200', href: '' },
        { name: '5', logo: 'https://source.unsplash.com/random/200x200', href: '' },
        { name: '6', logo: 'https://source.unsplash.com/random/200x200', href: '' }
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
