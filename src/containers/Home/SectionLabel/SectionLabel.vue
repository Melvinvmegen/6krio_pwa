<template lang='pug'>
  .section.section-label(id='section-label')
    section-title(text='LABEL')
    a.section-anchor(id='LABEL')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold INDEPENDANT CREATIVE LABEL
        .split-side
          .left-side
            span.featured-item-body 6k rio records est une structure independante avec pour volonte de faire decouvrir et d’accompagner les artistes de demain en leur procurant un soutien, une equipe et un savoir-faire via les differentes competences de nos equipes.
            .left CREATIVITE
              .border-title
            span.featured-item-body Un accompagnement personnalise des plus performant qui place l’humain au coeur du process, au centre de l‘attention en evitant l’intrusivite creative si classique de cette industrie. Couper avec les standards en mettant l’accent sur l’epanouissement des artistes et ainsi faciliter le processus creatif propre a chacun.

          .right-side
            span.featured-item-body Plus qu’un studio, plus qu’un plus qu’un service marketing , une equipe passionne et collaborative qui mutualise ses competences pour permettre a nos collaborateurs de developper leur projets et rencontrer leur audience.
            .right ACCESSIBILITE
              .border-title
            span.featured-item-body Un accompagnement personnalise des plus performant qui place l’humain au coeur du process, au centre de l‘attention en evitant l’intrusivite creative si classique de cette industrie. Couper avec les standards en mettant l’accent sur l’epanouissement des artistes et ainsi faciliter le processus creatif propre a chacun.
      service(:services='services')
</template>

<script>

import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Service from '@/components/Service/Service'

export default {
  components: {
    SectionTitle,
    Service
  },
  data () {
    return {
      services: [
        { id: 0, title: 'MIX & MASTERING', img: 'https://source.unsplash.com/random/240x200', text: ['Identite visuelles, community management... VOUS SOUHAITEZ ETRE ACCOMPAGNER PAR DES PROFESSIONNELS DE LA MUSIQUE, DU MARKETING ET DE L’AUDIOVISUEL ?', 'NOUS GERONS POUR VOUS LA DISTRIBUTION DE VOTRE MUSIQUE SUR LES PLATEFORMES DE STREAMING ET VOUS RECUPEREZ 100% DE VOS ROYALTIES. TROIS OFFRES POSSIBLES :', '1-3 SONS - 9.99€/an', '4-9 SONS - 19.99€/an', '10+ SONS - 49.99€/an', 'EXPLIQUEZ NOUS VOTRE PROJET, VOTRE AMBITION ET NOUS SERONS A MÊME DE REPONDRE A VOS BESOINS DANS LES PLUS BREFS DELAIS !'] },
        { id: 1, title: 'RECORDING STUDIO', img: 'https://source.unsplash.com/random/240x200', text: ['Identite visuelles, community management... VOUS SOUHAITEZ ETRE ACCOMPAGNER PAR DES PROFESSIONNELS DE LA MUSIQUE, DU MARKETING ET DE L’AUDIOVISUEL ?', 'NOUS GERONS POUR VOUS LA DISTRIBUTION DE VOTRE MUSIQUE SUR LES PLATEFORMES DE STREAMING ET VOUS RECUPEREZ 100% DE VOS ROYALTIES. TROIS OFFRES POSSIBLES :', '1-3 SONS - 9.99€/an', '4-9 SONS - 19.99€/an', '10+ SONS - 49.99€/an', 'EXPLIQUEZ NOUS VOTRE PROJET, VOTRE AMBITION ET NOUS SERONS A MÊME DE REPONDRE A VOS BESOINS DANS LES PLUS BREFS DELAIS !'] },
        { id: 2, title: 'EQUIPEMENT', img: 'https://source.unsplash.com/random/240x200', text: ['Identite visuelles, community management... VOUS SOUHAITEZ ETRE ACCOMPAGNER PAR DES PROFESSIONNELS DE LA MUSIQUE, DU MARKETING ET DE L’AUDIOVISUEL ?', 'NOUS GERONS POUR VOUS LA DISTRIBUTION DE VOTRE MUSIQUE SUR LES PLATEFORMES DE STREAMING ET VOUS RECUPEREZ 100% DE VOS ROYALTIES. TROIS OFFRES POSSIBLES :', '1-3 SONS - 9.99€/an', '4-9 SONS - 19.99€/an', '10+ SONS - 49.99€/an', 'EXPLIQUEZ NOUS VOTRE PROJET, VOTRE AMBITION ET NOUS SERONS A MÊME DE REPONDRE A VOS BESOINS DANS LES PLUS BREFS DELAIS !'] },
        { id: 3, title: 'RATE CARD', img: 'https://source.unsplash.com/random/240x200', text: ['Identite visuelles, community management... VOUS SOUHAITEZ ETRE ACCOMPAGNER PAR DES PROFESSIONNELS DE LA MUSIQUE, DU MARKETING ET DE L’AUDIOVISUEL ?', 'NOUS GERONS POUR VOUS LA DISTRIBUTION DE VOTRE MUSIQUE SUR LES PLATEFORMES DE STREAMING ET VOUS RECUPEREZ 100% DE VOS ROYALTIES. TROIS OFFRES POSSIBLES :', '1-3 SONS - 9.99€/an', '4-9 SONS - 19.99€/an', '10+ SONS - 49.99€/an', 'EXPLIQUEZ NOUS VOTRE PROJET, VOTRE AMBITION ET NOUS SERONS A MÊME DE REPONDRE A VOS BESOINS DANS LES PLUS BREFS DELAIS !'] }
      ]
    }
  }
}
</script>

<style>
  .section-label {
    background: #fff;
  }

  .split-side .border-title {
    position: absolute;
    bottom: -5px;
    width: 20%;
  }

  .left {
    display: flex;
    font-size: 20px;
    margin: 20px 0;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
  }

  .right {
    text-align: left;
    font-size: 20px;
    margin: 20px 0;
    position: relative;
  }

  .split-side {
    display: flex;
  }

  .left-side {
    text-align: end;
    margin-right: 40px;
  }
</style>
