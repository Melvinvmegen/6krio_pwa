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
            span.featured-item-body Le studio d’enregistrement vous permet d’enregistrer vos creations dans une atmosphere detendue et intimiste, notre ingenieur son sera la pour vous epauler, vous driver si besoin mais surtout afin de vous d’un equipement professionnel analogique & numerique numerique numerique.
            br
            br
            contact-button(text="VIDEO & VISUAL STUDIO", :className="true")
      service(:services="services")
</template>

<script>

import SectionTitle from '@/components/SectionTitle/SectionTitle'
import ContactButton from '@/components/Button/ContactButton.vue'
import Service from '@/components/Service/Service'

export default {
  components: {
    SectionTitle,
    ContactButton,
    Service
  },
  data () {
    return {
      services: [
        { id: 0, title: 'ARTIST & LABEL SERVICES', img: 'https://source.unsplash.com/random/240x200', text: ['Identite visuelles, community management... VOUS SOUHAITEZ ETRE ACCOMPAGNER PAR DES PROFESSIONNELS DE LA MUSIQUE, DU MARKETING ET DE L’AUDIOVISUEL ?', 'NOUS GERONS POUR VOUS LA DISTRIBUTION DE VOTRE MUSIQUE SUR LES PLATEFORMES DE STREAMING ET VOUS RECUPEREZ 100% DE VOS ROYALTIES. TROIS OFFRES POSSIBLES :', '1-3 SONS - 9.99€/an', '4-9 SONS - 19.99€/an', '10+ SONS - 49.99€/an', 'EXPLIQUEZ NOUS VOTRE PROJET, VOTRE AMBITION ET NOUS SERONS A MÊME DE REPONDRE A VOS BESOINS DANS LES PLUS BREFS DELAIS !'] },
        { id: 1, title: 'STUDIO SERVICES', img: 'https://source.unsplash.com/random/240x200', text: ['Identite visuelles, community management... VOUS SOUHAITEZ ETRE ACCOMPAGNER PAR DES PROFESSIONNELS DE LA MUSIQUE, DU MARKETING ET DE L’AUDIOVISUEL ?', 'NOUS GERONS POUR VOUS LA DISTRIBUTION DE VOTRE MUSIQUE SUR LES PLATEFORMES DE STREAMING ET VOUS RECUPEREZ 100% DE VOS ROYALTIES. TROIS OFFRES POSSIBLES :', '1-3 SONS - 9.99€/an', '4-9 SONS - 19.99€/an', '10+ SONS - 49.99€/an', 'EXPLIQUEZ NOUS VOTRE PROJET, VOTRE AMBITION ET NOUS SERONS A MÊME DE REPONDRE A VOS BESOINS DANS LES PLUS BREFS DELAIS !'] },
        { id: 2, title: 'MARKETING SERVICES', img: 'https://source.unsplash.com/random/240x200', text: ['Identite visuelles, community management... VOUS SOUHAITEZ ETRE ACCOMPAGNER PAR DES PROFESSIONNELS DE LA MUSIQUE, DU MARKETING ET DE L’AUDIOVISUEL ?', 'NOUS GERONS POUR VOUS LA DISTRIBUTION DE VOTRE MUSIQUE SUR LES PLATEFORMES DE STREAMING ET VOUS RECUPEREZ 100% DE VOS ROYALTIES. TROIS OFFRES POSSIBLES :', '1-3 SONS - 9.99€/an', '4-9 SONS - 19.99€/an', '10+ SONS - 49.99€/an', 'EXPLIQUEZ NOUS VOTRE PROJET, VOTRE AMBITION ET NOUS SERONS A MÊME DE REPONDRE A VOS BESOINS DANS LES PLUS BREFS DELAIS !'] },
        { id: 3, title: 'MUSIC PRODUCING', img: 'https://source.unsplash.com/random/240x200', text: ['Identite visuelles, community management... VOUS SOUHAITEZ ETRE ACCOMPAGNER PAR DES PROFESSIONNELS DE LA MUSIQUE, DU MARKETING ET DE L’AUDIOVISUEL ?', 'NOUS GERONS POUR VOUS LA DISTRIBUTION DE VOTRE MUSIQUE SUR LES PLATEFORMES DE STREAMING ET VOUS RECUPEREZ 100% DE VOS ROYALTIES. TROIS OFFRES POSSIBLES :', '1-3 SONS - 9.99€/an', '4-9 SONS - 19.99€/an', '10+ SONS - 49.99€/an', 'EXPLIQUEZ NOUS VOTRE PROJET, VOTRE AMBITION ET NOUS SERONS A MÊME DE REPONDRE A VOS BESOINS DANS LES PLUS BREFS DELAIS !'] }
      ]
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
