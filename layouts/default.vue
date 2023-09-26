<template>
  <v-app>
    <div class="background__container">
      <v-img
        id="background-logo"
        src="background-logo.svg"
        max-width="230px"
        max-height="120px"
      />
      <v-img
        id="background-kanji"
        src="background-kanji.svg"
        max-width="120px"
        max-height="140px"
      />
    </div>
    <div
      id="main__container"
      class="d-flex align-items-center justify-items-center"
      :class="{ 'flex-column': $vuetify.breakpoint.mdAndDown }"
    >
      <lazy-navbar />
      <nuxt class="nuxt__instance" />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Bruno Belucci',
    }
  },
}
</script>
<style lang="scss">
#main__container {
  min-height: 100vh;
  min-width: 100vw;
}
.background__container {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  opacity: 0.6;
  background-color: #313639;
  filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  #background-logo {
    position: fixed;
    left: 0;
    bottom: 5px;
    scale: 0.8;
  }
  #background-kanji {
    position: fixed;
    right: 5px;
    top: 0;
    scale: 0.8;
  }
}
</style>
