<template lang="pug">
  .section.section-one(id="section-beats")
    section-title(text="BEATS")
    a.section-anchor(id='BEATS')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold 6K RIO PRODUCERS
        span.featured-item-body Nous cherchons a developper notre catalogue de producers en cultivant notre volonte de proposer une large palette de couleurs. La diversite est le mot d’ordre, mettre nos compositeurs en avant afin de leur offrir la visibilite qu’ils meritent.
        br
        span.featured-item-body cliquez sur le producer de votre choix et decouvrez nos creations disponibles a l’achat.
      .members
        avatar-profil(v-for="member in Members" :key="member.id" :member="member")
</template>

<script>

import AvatarProfil from '@/components/AvatarProfil/AvatarProfil'
import SectionTitle from '@/components/SectionTitle/SectionTitle'

export default {
  components: {
    AvatarProfil,
    SectionTitle
  },
  data () {
    return {
      Members: [
        {
          id: 1,
          name: 'MAMASH',
          img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm',
          icons: [
            { icon: 'fa-facebook', href: '' },
            { icon: 'fa-instagram', href: '' }
          ]
        },
        {
          id: 2,
          name: 'MIRADAZ',
          img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm',
          icons: [
            { icon: 'fa-facebook', href: '' },
            { icon: 'fa-instagram', href: '' }
          ]
        },
        {
          id: 3,
          name: 'K3RMITE',
          img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm',
          icons: [
            { icon: 'fa-facebook', href: '' },
            { icon: 'fa-instagram', href: '' }
          ]
        },
        {
          id: 4,
          name: 'VINZ',
          img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm',
          icons: [
            { icon: 'fa-facebook', href: '' },
            { icon: 'fa-instagram', href: '' }
          ]
        },
        {
          id: 5,
          name: 'BABYTRACK',
          img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm',
          icons: [
            { icon: 'fa-facebook', href: '' },
            { icon: 'fa-instagram', href: '' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
  .section-one {
    background: #fff;
  }

  .members {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: 30px auto 0 auto;
  }
</style>
