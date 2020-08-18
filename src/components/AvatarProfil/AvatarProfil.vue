<template lang="pug">
  div.avatar-profil
    img(class="avatar-large" alt="avatar-large" :src="member.img")
    span.name {{ member.name }}
    span.avatar-title {{ member.title }}
    social-media(:icons="member.icons")
</template>

<script>

import socialMedia from '@/components/SocialMedia/SocialMedia'

export default {
  components: {
    socialMedia
  },

  props: {
    member: Object
  }
}
</script>

<style>
  .avatar-profil {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    justify-content: space-evenly;
    height: 180px;
  }

  .avatar {
    width: 40px;
    border-radius: 50%;
  }

  .avatar-large {
    width: 90px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .name {
    font-weight: 700;
    text-align: center;
  }

  .avatar-title {
    text-align: center;
    font-style: italic;
    font-size: 12px;
  }
</style>
