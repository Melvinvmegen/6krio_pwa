<template lang="pug">
  div
    SectionLabel
    SectionStudio
    SectionBeat
    SectionTeam
    SectionPartners
    SectionContact
</template>

<script>
import SectionLabel from '@/containers/Home/SectionLabel/SectionLabel'
import SectionStudio from '@/containers/Home/SectionStudio/SectionStudio'
import SectionBeat from '@/containers/Home/SectionBeat/SectionBeat'
import SectionTeam from '@/containers/Home/SectionTeam/SectionTeam'
import SectionPartners from '@/containers/Home/SectionPartners/SectionPartners'
import SectionContact from '@/containers/Home/SectionContact/SectionContact'

export default {
  components: {
    SectionLabel,
    SectionStudio,
    SectionBeat,
    SectionTeam,
    SectionPartners,
    SectionContact
  }
}
</script>

<style>
  .section {
    width: 100%;
    display: flex;
    min-height: 90vh;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .title-bold {
    color: #000;
    font-size: 30px;
    text-decoration: none;
    line-height: 2.5;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-align: center;
    margin-bottom: 20px;
  }

  .border-title {
    border-top: solid 4px #000;
    width: 50%;
  }

  .section-main {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .section-wrapper {
    position: relative;
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    margin: 0 auto;
    width: 60%;
    align-items: center;
  }

  .section-left {
    padding-right: 5%;
    left: 0;
    max-width: 50%;
    flex: 0 0 50%;
  }

  .section-right {
    flex: 0 0 50%;
    max-width: 50%;
    text-align: center;
  }

  .section-wrapper-right {
    margin-bottom: 160px;
    display: inline-block;
  }

  .section-wrapper-left {
    display: inline-block;
  }

  .featured-item-body {
    line-height: 1.8;
    text-align: center;
  }

  @media (max-width: 769px) {
    .section {
      min-height: 1000px !important;
      height: 90vh;
    }

    .section-wrapper {
      flex-direction: column;
    }

    .section-left {
      padding-right: 0% !important;
      max-width: 100% !important;
      flex: 0 0 100% !important;
      margin-bottom: 50px;
    }

    .section-right {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    .section {
      min-height: 1200px !important;
    }
  }
</style>
