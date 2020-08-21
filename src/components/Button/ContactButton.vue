<template lang="pug">
  div.header-contact
    span
      a.cta-button(:class="[className ? 'black-button' : 'white-button']" title="hire-me") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    className: Boolean
  }
}
</script>

<style>
  .cta-button {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
  }

  .cta-button-xl {
    padding: 1.4rem 3.4rem;
    font-size: 1.8rem;
    font-weight: 700;
  }

  .header-contact {
    display: inline-block;
  }

  .black-button {
    background: #000;
    border: 2px solid #fff !important;
    color: #fff !important;
  }

  .black-button:hover {
    background: transparent;
    border: 2px solid #000 !important;
    color: #000 !important;
  }

  .white-button {
    background: #fff;
    border: 2px solid #000 !important;
    border-radius: 8px;
    color: #000 !important;
  }

  .white-button:hover {
    color: #000 !important;
  }
</style>
