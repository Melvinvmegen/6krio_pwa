<template lang="pug">
  .section.section-studio(id="section-studio")
    section-title(text="STUDIO" :rightSide="true")
    a.section-anchor(id='Studio')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold 360° CREATIVE STUDIO
        span.featured-item-body.italic Nous sommes en capacite de produire vos creations audio mais aussi visuelles.
        br
        .split-side
          .left-side
            span.featured-item-body Le studio de creation visuel, vous offre lui la possibilite de developper votre identite visuel, photographie, video, motion design et graphisme, nos differentes competences mises a votre disposition afin de vous accompagner de maniere ultra-personalisee selon vos besoins et votre budget.
            br
            br
            contact-button(text="RECORDING STUDIO")
          .right-side
            span.featured-item-body Le studio d’enregistrement vous permet d’enregistrer vos creations dans une atmosphere detendue et intimiste, notre ingenieur son sera la pour vous epauler, vous driver si besoin mais surtout afin de vous d’un equipement professionnel analogique & numerique.
            br
            br
            contact-button(text="VIDEO & VISUAL STUDIO", :className="true")
</template>

<script>

import SectionTitle from '@/components/SectionTitle/SectionTitle'
import ContactButton from '@/components/Button/ContactButton.vue'

export default {
  components: {
    SectionTitle,
    ContactButton
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  .section-studio {
    background: #fff;
  }

  .italic {
    font-style: italic;
  }
</style>
