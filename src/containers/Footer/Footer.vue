<template lang="pug">
  .footer
    .footer-inner-top
      .footer-inner-left
        h2(href="") Mentions Legales
      .footer-inner-center
        Logo(color="white")
      .footer-inner-right
        h2(href="") F.A.Q
    .footer-inner-bottom
      social-media(:icons="icons" color="white")
      br
      span.white.center contact@6kriorecords.com
      br
      span.white.center Copyright @ 2020 6K RIO RECORDS • All rights reserved
      br
      span.white.center Designed by 6K RIO Studio and developped by Melvin VanMegen

</template>

<script>

import Logo from '@/components/Logo/Logo'
import socialMedia from '@/components/SocialMedia/SocialMedia'

export default {
  components: {
    Logo,
    socialMedia
  },
  data () {
    return {
      icons: [
        { icon: 'fa-facebook', href: '' },
        { icon: 'fa-instagram', href: '' },
        { icon: 'fa-linkedin', href: '' },
        { icon: 'fa-youtube', href: '' }
      ]
    }
  }
}
</script>

<style>
  .footer {
    margin: 40px 0 auto;
    max-width: none;
    position: relative;
    width: 100%;
    max-height: 450px;
    background: #010101;
    padding: 3% 0;
    display: flex;
    flex-direction: column;
  }

  .footer h2 {
    color: #fff;
  }

  .footer-inner-top {
    display: flex;
    width: 60%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-around;
  }

  .footer-inner-bottom {
    margin: 0 auto;
    display: flex;
    width: 60%;
    flex-direction: column;
    margin-top: 50px;
  }

  .footer-inner-left {
    width: 33%;
    border-right: 2px solid white;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .footer-inner-left a {
    color: white;
  }

  .footer-inner-center {
    width: 33%;
    border-right: 2px solid white;
    text-align: center;
    color: white;
  }

  .footer-inner-center a {
    color: white !important;
  }

  .footer-inner-right {
    width: 33%;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .footer-inner-right li {
    color: white;
    font-size: 25px;
  }

</style>
