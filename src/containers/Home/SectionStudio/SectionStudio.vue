<template lang="pug">
  .section.section-studio(id="section-studio")
    section-title(text="STUDIO" :rightSide="true")
    a.section-anchor(id='Studio')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold 360° CREATIVE STUDIO
        span.featured-item-body Nous sommes en capacite de produire vos creations audio et visuelles.
        br
        span.featured-item-body Le studio d’enregistrement vous permet d’enregistrer vos creations dans une atmosphere detendue et intimiste, notre ingenieur son sera la pour vous epauler, vous driver si besoin mais surtout afin de vous d’un equipement professionnel analogique & numerique.
        br
        span.featured-item-body Le studio de creation visuel, vous offre lui la possibilite de developper votre identite visuel, photographie, video, motion design et graphisme, nos differentes competences mises a votre disposition afin de vous accompagner de maniere ultra-personalisee selon vos besoins et votre budget.
</template>

<script>

import SectionTitle from '@/components/SectionTitle/SectionTitle'

export default {
  components: {
    SectionTitle
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
</style>
