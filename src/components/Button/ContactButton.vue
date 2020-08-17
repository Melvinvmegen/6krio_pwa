<template lang="pug">
  div.header-contact
    span
      a.cta-button(:class="[className ? 'hire-me' : 'sticky-hire-me']" title="hire-me") {{ text }}
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
    border-radius: 0.325rem;
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

  .hire-me {
    background: #254A5D;
    border: 2px solid #fff !important;
    color: #fff !important;
  }

  .hire-me:hover {
    background: transparent;
    border: 2px solid #254A5D !important;
    color: #254A5D !important;
  }

  .sticky-hire-me {
    border: 2px solid #fff !important;
    border-radius: 8px;
    color: #fff !important;
  }

  .sticky-hire-me:hover {
    background: #254A5D;
    color: white !important;
    border: 2px solid white;
  }
</style>
