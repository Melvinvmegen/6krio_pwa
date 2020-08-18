<template lang="pug">
  .section.section-contact(id="section-contact")
    a.section-anchor(id='contact')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold EXPLAIN YOUR PROJECT
      contact-form
</template>

<script>

import contactForm from '@/components/ContactForm/ContactForm'

export default {
  components: {
    contactForm
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  .section-contact {
    background: #fff;
  }
</style>
