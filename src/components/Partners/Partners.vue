<template lang="pug">
  .partners
    .mask-wrapper
      .left-mask
      .mask-placeholder
      .mask-placeholder
      .right-mask
    swiper(class="swiper" :options="swiperOption")
      swiper-slide(v-for="partner in partners" :key="partner.name")
        a(:href="partner.href" :alt="partner.name")
          img(:src="partner.logo")
    .swiper-pagination(slot="pagination")
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  props: {
    partners: Array
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style>
  .mask-wrapper {
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
    pointer-events: none;
    max-width: 1440px;
  }

  .mask-placeholder {
    flex: 1 1 0%;
  }

  .left-mask {
    left: 0;
    flex: 1 1 0%;
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
  }

  .right-mask {
    right: 0;
    flex: 1 1 0%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
  }

  .partners {
    display: flex;
    margin-top: 30px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination {
    bottom: -50px;
    left: 50%;
  }

  .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    margin: 0 4px;
  }

  .swiper-pagination-bullet-active {
    color: #000 !important;
    background: #000 !important;
  }
</style>
