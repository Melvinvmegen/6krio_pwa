<template lang="pug">
  .main-header-center
    NavItem(:item="items[0]")
    NavItem(:item="items[1]")
    Logo(color="white")
    NavItem(:item="items[2]")
    NavItem(:item="items[3]")
</template>

<script>
import NavItem from '@/components/NavItem/NavItem'
import Logo from '@/components/Logo/Logo'

export default {
  components: {
    NavItem,
    Logo
  },
  data () {
    return {
      items: [
        { id: 1, name: 'NEWS' },
        { id: 2, name: 'LABEL' },
        { id: 3, name: 'STUDIO' },
        { id: 4, name: 'BEATS' }
      ]
    }
  }
}
</script>

<style>
  .main-header-center {
    align-items: center;
    height: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 60%;
  }

  .main-header-center .nav-menu-item {
    padding: 20px 10px;
    font-size: 20px;
    font-weight: 700;
  }

  .nav-menu-item span {
    width: 100%;
    text-align: center;
  }
</style>
