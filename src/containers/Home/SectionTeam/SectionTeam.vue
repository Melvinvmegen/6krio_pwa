<template lang="pug">
  .section.section-team(id="section-team")
    a.section-anchor(id='team')
    .section-main
      .section-wrapper
        .border-title
        h2.title-bold 6K RIO WORKING TEAM
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
        { id: 1, name: 'HUGO BORDES', title: 'EXECUTIVE DIRECTOR', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 2, name: 'LUCAS JAMELIN', title: 'LABEL MANAGER', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 3, name: 'ZOHRA HACHANI', title: 'TRADE MARKETING MANAGER', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 4, name: 'THOMAS GOZZO', title: 'GRAPHIC DESIGNER', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 5, name: 'SIMON SIROT', title: 'GRAPHIC DESIGNER ', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' },
        { id: 6, name: 'MELVIN VANMEGEN', title: 'WEBDEVELOPER ', img: 'https://kitt.lewagon.com/placeholder/users/arthur-littm', fb: '', insta: '' }
      ]
    }
  }
}
</script>

<style>
  .section-team {
    background: #fff;
  }

  .members {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: 30px auto 0 auto;
    flex-wrap: wrap;
  }
</style>
