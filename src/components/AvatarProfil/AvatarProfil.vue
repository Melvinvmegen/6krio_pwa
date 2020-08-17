<template lang="pug">
  div.avatar-profil
    img(class="avatar-large" alt="avatar-large" :src="member.img")
    span.name {{ member.name }}
    span.avatar-title {{ member.title }}
    .social-media-icons
      a(:href="member.fb")
        i.icon.fab.fa-facebook
      a(:href="member.insta")
        i.icon.fab.fa-instagram
</template>

<script>
export default {
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

  .social-media-icons {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
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
