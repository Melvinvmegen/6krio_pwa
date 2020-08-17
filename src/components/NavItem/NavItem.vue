<template lang="pug">
  .nav-menu-item(:key="item.id")
    a(:href="item.name")
    span.text {{ item.name }}

</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>
