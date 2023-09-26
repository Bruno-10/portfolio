<template>
  <div
    class="index__container pages_main__container d-flex align-center justify-center"
  >
    <lazy-about-me v-if="$vuetify.breakpoint.mdAndUp" />
    <lazy-about-me-mobile v-else />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  transition: 'main',
}
</script>
<style lang="scss">
.index__container {
  margin: auto auto;
  font-size: 3em;
  font-weight: 500;
  line-height: 1.4em;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  background-color: transparent !important;
  text-shadow: 0 0 27px rgba(0, 0, 0, 0.78);
}
.tooltips {
  width: fit-content;
}
</style>
