<template>
  <div
    class="navigation__bar"
    :class="{ 'flex-column align-y': $vuetify.breakpoint.lgAndUp }"
  >
    <router-link
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      class="pa-2 mb-3"
      :class="{ 'mx-3': $vuetify.breakpoint.mdAndDown }"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'About Me',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Projects',
          to: '/projects',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact',
          to: '/contact',
        },
      ],
    }
  },
}
</script>

<style lang="sass">
.navigation__bar a::after
  content: ''
  position: absolute
  width: 100%
  transform: scaleX(0)
  height: 2px
  bottom: 0
  left: 0
  background-color: var(--v-primary-base)
  transform-origin: left
  transition: transform 0.25s ease-out
.navigation__bar a::before
  content: ''
  position: absolute
  width: 100%
  transform: scaleX(0)
  height: 2px
  top: 0
  left: 0
  background-color: var(--v-primary-base)
  transform-origin: right
  transition: transform 0.25s ease-out

.navigation__bar a:hover::after
  transform: scaleX(0.8)
  transform-origin: right

.navigation__bar a:hover::before
  transform: scaleX(0.8)
  transform-origin: left

.align-y
  margin: auto 0 !important

.navigation__bar
  min-width: 125px
  width: fit-content
  display: flex
  align-content: center
  margin: 0 auto
  background-color: transparent !important
  z-index: 2
  a
    background-color: var(--v-secondary-base) !important
    color: var(--v-primary-base) !important
    transition: all 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9)
    display: inline-block
    position: relative
    text-decoration: none
  *
    font-size: 20px
    height: auto !important
</style>
