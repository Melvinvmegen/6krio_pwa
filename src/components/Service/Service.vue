<template lang="pug">
  .flex-services
    .service(v-for="service in services" :style="{ backgroundImage: 'url(' + service.img + ')' }" :key="service.title")
      .service-inner(@click='openModal(service.id)') {{ service.title }}
      Modal(ref="modal" :background="service.img")
        template(slot="title")
          .close-modal(@click='closeModal(service.id)')
            .line
            .line
          .title-bold.align-left {{ service.title }}
            .border-title
        template(slot="body")
          .featured-item-body {{ formattedText(service.text) }}
        template(slot="footer")
          .footer-modal
            .footer-action PRENEZ CONTACT
</template>

<script>

import Modal from '@/components/Modal/Modal'

export default {
  components: {
    Modal
  },
  props: {
    services: Array
  },
  methods: {
    openModal (id) {
      this.$refs.modal[id].show()
    },
    closeModal (id) {
      this.$refs.modal[id].hide()
    },
    formattedText (text) {
      return text.join(',')
    }
  }
}
</script>

<style>
  .flex-services {
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 5% auto;
  }

  .service {
    width: 20%;
    background: #000;
    height: 200px;
    border-radius: 10%;
  }
  .service-inner {
    font-size: 1.5vw;
    color: #fff;
    padding: 15% 5%;
    font-weight: 700;
    height: 100%;
    overflow-wrap: anywhere;
  }

  .align-left {
    text-align: left !important;
  }

  .title-bold .border-title {
    width: 30% !important;
  }

  .footer-action {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
  }
</style>
