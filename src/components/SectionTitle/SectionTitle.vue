<template lang="pug">
  .section-title.animate__animated(:class="{ rightSide: rightSide}" v-observe-visibility="{ callback: setActive, once: true }")
    transition(:enter-active-class="enterActiveClass")
      .section-title-container(:class="{ rightBorderRadius: rightSide }" v-if="isVisible")
        .section-title-inner-border(:class="{ leftBorder: rightSide }")
          .section-title-inner(:class="{ rightPosition: rightSide }") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    rightSide: Boolean
  },
  data () {
    return {
      isVisible: Boolean
    }
  },
  computed: {
    enterActiveClass: function () {
      return this.rightSide ? 'animate__animated animate__backInLeft' : 'animate__animated animate__backInRight'
    }
  },
  methods: {
    setActive (isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>

<style>
  .section-title {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    margin-top: 5%;
  }

  .rightSide {
    flex-direction: row;
  }

  .rightBorderRadius {
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: initial !important;
    border-bottom-left-radius: initial !important;
  }

  .rightPosition {
    right: 10%;
    left: initial !important;
  }

  .section-title-container {
    width: 50%;
    height: 100px;
    display: flex;
    align-items: center;
    background: #000;
    margin-bottom: 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    position: relative;
  }

  .section-title-inner {
    color: #fff;
    font-size: 60px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
  }

  .section-title-inner-border {
    border: solid 2px #fff;
    height: 97%;
    width: 100%;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    position: absolute;
    bottom: -3px;
    border-right: none;
  }

  .leftBorder {
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: initial !important;
    border-bottom-left-radius: initial !important;
    position: absolute;
    bottom: -3px;
    border-left: none;
  }
</style>
