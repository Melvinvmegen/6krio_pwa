<template lang="pug">
  div
    Header
    Banner
    Home
    Footer
</template>

<script>
import Header from '@/containers/Header/Header'
import Banner from '@/containers/Banner/Banner'
import Home from '@/containers/Home/Home'
import Footer from '@/containers/Footer/Footer'

export default {
  components: {
    Header,
    Banner,
    Home,
    // Gallery,
    // Testimonials,
    Footer
  }
}
</script>

<style>
  body {
    font-family: "Montserrat","BuenosAires",sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  a {
    color: #000 !important;
  }

  h1,h2 {
    font-size: 30px !important;
    text-decoration: none;
    color: #000;
    line-height: 2;
  }

  .section-anchor {
    position: absolute;
    top: -120px;
  }

  .white {
    color: #fff;
  }

  .center {
    text-align: center;
  }

  .flex {
    display: flex;
  }

 @media (max-width: 425px) {
    h1 {
      line-height: 1.5;
    }
    a {
      transition: all 0.5s;
    }
  }
</style>
