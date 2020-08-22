<template lang="pug">
  .nav-menu-item(:key="item.id" :class="{'nav-anim': item.active}")
    a(:href="'#'+ item.name" @click="itemActivated")
      span.text {{ item.name }}

</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    itemActivated () {
      this.$parent.handleClick(this.item)
    }
  }
}
</script>

<style>
  .nav-anim a {
    display: inline-block;
    border: 3px solid transparent;
    position: relative;
    cursor: pointer;
  }

  .nav-anim a .text {
    transform: translate3d(0, 0.7em, 0);
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  .nav-anim a :after {
    position: absolute;
    content: '';
    bottom: -6px;
    left: calc(0.7em * 1.2);
    right: calc(0.7em * 1.2);
    height: 4px;
    background: #fff;
    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
  }

  .nav-anim .line {
    position: absolute;
    background: #fff;
    bottom: -6px;
  }

  .nav-anim .line.-bottom {
    height: 3px;
    left: -3px;
    right: -3px;
    transform: scale3d(0, 1, 1);
  }

  .nav-anim .line.-bottom {
    bottom: -3px;
    transform-origin: right;
  }

  .nav-anim a :active .text {
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  .nav-anim a :hover:after,
  .nav-anim a :active:after {
    transform: scale3d(0, 1, 1);
    right: -3px;
    left: -3px;
    transform-origin: right;
    transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
  }

  .nav-anim a :hover .line,
  .nav-anim .line.-right {
    right: -3px;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    transform-origin: top;
  }

  .nav-anim a :active .line {
    transform: scale3d(1, 1, 1);
  }

  .nav-anim a :hover .line.-bottom,
  .nav-anim a :active .line.-bottom {
    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    transform-origin: left;
  }
</style>
