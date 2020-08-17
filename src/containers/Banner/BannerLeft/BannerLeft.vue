<template lang="pug">
  .header-left
    .title-container
      h1 HOLY SHIT
    .cta-wrapper-home
      .home-text
        p 6k rio records est une structure independante avec pour volonte de faire decouvrir et d’accompagner les artistes de demain en leur procurant un soutien, une equipe et un savoir-faire via les differentes competences de nos equipes. plus qu’un studio, plus qu’un plus qu’un service marketing , une equipe passionne et collaborative qui mutualise ses competences pour permettre a nos collaborateurs de developper leur projets et rencontrer leur audience.

</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style>

  .header-left {
    text-align: justify;
    z-index: 10;
    position: relative;
    width: 60%;
  }

  .title-container {
    height: 20%;
    min-height: 120px;
  }

  .title-container h1 {
    color: #fff;
    font-size: 5.625rem !important;
  }

  .cta-wrapper-home {
    height: 80%;
  }

  .home-text {
    margin: 50px 0;
    line-height: 2;
    font-size: 16px;
    color: #fff;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 960px) {
  }

  @media (max-width: 769px) {
    .home-text p {
      text-align: justify
    }
  }

  @media (max-width: 650px) {
    .home-text p {
      text-align: justify
    }
  }

  @media (max-width: 500px) {
  }
</style>
