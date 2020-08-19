<template lang="pug">
  .section.section-contact(id="section-contact")
    section-title(text="CONTACT")
    a.section-anchor(id='contact')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold EXPLAIN YOUR PROJECT
      contact-form
</template>

<script>

import contactForm from '@/components/ContactForm/ContactForm'
import SectionTitle from '@/components/SectionTitle/SectionTitle'

export default {
  components: {
    contactForm,
    SectionTitle
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
