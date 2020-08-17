<template lang="pug">
  .section.section-one(id="section-beat")
    a.section-anchor(id='Beat')
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

export default {
  components: {
    AvatarProfil
  },
  data () {
    return {
      Members: [
        { id: 1, name: 'MAMASH', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 2, name: 'MIRADAZ', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 3, name: 'K3RMITE', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 4, name: 'VINZ', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 5, name: 'BABYTRACK', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' }
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
