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
        { id: 0, active: false, name: 'LABEL' },
        { id: 1, active: false, name: 'STUDIO' },
        { id: 2, active: false, name: 'BEATS' },
        { id: 3, active: false, name: 'TEAM' }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClick (item) {
      this.NoDuplicateActive()
      this.items[item.id].active = true
    },
    handleScroll () {
      const sectionLabelPos = document.getElementById('section-label').offsetTop
      const sectionStudioPos = document.getElementById('section-studio').offsetTop
      const sectionBeatsPos = document.getElementById('section-beats').offsetTop
      const sectionTeamPos = document.querySelector('.section-team').offsetTop
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.NoDuplicateActive()
      if (currentScrollPosition >= (sectionLabelPos - 155) && currentScrollPosition <= sectionStudioPos) {
        this.NoDuplicateActive()
        this.items[0].active = true
      }
      if (currentScrollPosition >= (sectionStudioPos - 155) && currentScrollPosition <= sectionBeatsPos) {
        this.NoDuplicateActive()
        this.items[1].active = true
      }
      if (currentScrollPosition >= (sectionBeatsPos - 155) && currentScrollPosition <= sectionTeamPos) {
        this.NoDuplicateActive()
        this.items[2].active = true
      }
      if (currentScrollPosition >= (sectionTeamPos - 155)) {
        this.NoDuplicateActive()
        this.items[3].active = true
      }
    },
    NoDuplicateActive () {
      this.items.forEach(element => {
        if (element.active) {
          element.active = false
        }
      })
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
