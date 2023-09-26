<template>
  <v-row no-gutters class="justify-center flex-column align-center">
    <v-col v-for="s in sections" :key="s.title.text" cols="6">
      <v-card
        class="glow rounded my-4 d-flex flex-column align-center pt-4"
        :class="{ 'pb-4': s.childs.type === 'rating' }"
      >
        <v-img
          contain
          :width="s.img.width"
          :height="s.img.height"
          :src="s.img.src"
        />
        <v-card-text v-if="s.childs.type === 'span'" class="text-center">
          {{ s.childs.content }}
        </v-card-text>
        <v-card-text v-if="s.childs.type === 'rating'" class="my-0 py-0">
          <div
            v-for="(child, i) in s.childs.content"
            :key="i"
            style="min-height: fit-content"
            class="d-flex flex-column justify-center align-center"
          >
            {{ child.name }}
            <v-rating
              v-model="child.rating"
              background-color="white"
              color="quinary accent-4"
              dense
              half-increments
              hover
              readonly
              size="18"
            ></v-rating>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import sections from '@/components/constants'

export default {
  name: 'AboutMe',
  computed: {
    sections() {
      return sections
    },
  },
}
</script>
