<template lang="pug">
  .section.section-label(id="section-label")
    section-title(text="LABEL")
    a.section-anchor(id='Label')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold INDEPENDANT CREATIVE LABEL
        span.featured-item-body 6k rio records est une structure independante avec pour volonte de faire decouvrir et d’accompagner les artistes de demain en leur procurant un soutien, une equipe et un savoir-faire via les differentes competences de nos equipes.
        br
        span.featured-item-body Plus qu’un studio, plus qu’un plus qu’un service marketing , une equipe passionne et collaborative qui mutualise ses competences pour permettre a nos collaborateurs de developper leur projets et rencontrer leur audience.
        .flex-relative
          .left CREATIVITE
            .border-title
          .right PASSION
            .border-title
        span.featured-item-body Un accompagnement personnalise des plus performant qui place l’humain au coeur du process, au centre de l‘attention en evitant l’intrusivite creative si classique de cette industrie. Couper avec les standards en mettant l’accent sur l’epanouissement des artistes et ainsi faciliter le processus creatif propre a chacun.
        br
        span.featured-item-body Aider les artistes à se developper, collaborer et s'engager avec eux...
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
  .section-label {
    background: #fff;
  }
  .flex-relative {
    display: flex;
    position: relative;
    width: 50%;
    justify-content: space-between;
    font-size: 20px;
    margin: 15px 0;
  }

  .flex-relative .border-title {
    position: absolute;
    bottom: -5px;
    width: 20%;
  }

  .left {
    display: flex;
    justify-content: flex-end;
  }

  .right {
    text-align: left;
  }
</style>
