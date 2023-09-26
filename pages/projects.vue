<template>
  <div
    class="projects__container pages_main__container d-flex align-center justify-center"
  >
    <v-card
      flat
      class="transparent projects_cards_container d-flex flex-column"
    >
      <v-card
        v-if="$vuetify.breakpoint.mdAndUp"
        id="selected"
        class="projects_cards"
        max-width="800px"
        min-width="800px"
        min-height="400px"
        max-height="400px"
        :style="{ backgroundImage: `url(img/${selectedProject.bigImg})` }"
        :href="selectedProject.href"
        target="_blank"
      >
        <v-img
          width="1000px"
          height="395px"
          class="projecs_cards_img"
          :src="`img/${selectedProject.bigImg}`"
        >
          <span> {{ $t(selectedProject.title) }} </span>
          <v-card-text>{{ $t(selectedProject.description) }}</v-card-text>
        </v-img>
      </v-card>
      <div
        class="d-flex my-6"
        :class="{
          'flex-column align-items-start': $vuetify.breakpoint.smAndDown,
          'justify-space-around': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-card
          v-for="(project, i) in projects"
          :id="i === 0 ? 'first' : ''"
          :key="i"
          class="projects_cards mx-6 transparent align-center justify-center"
          :class="{ 'mb-4': $vuetify.breakpoint.smAndDown }"
          min-width="150px"
          min-height="150px"
          @click="changeCard(project)"
        >
          <v-img
            v-if="$vuetify.breakpoint.mdAndUp"
            contain
            width="150px"
            height="150px"
            class="projecs_cards_img"
            :src="`img/${project.img}`"
          >
            <span class="d-inline-block"> {{ $t(project.title) }} </span>
          </v-img>
          <div
            v-else
            class="d-flex justify-space-around"
            :class="{
              'flex-column align-center': $vuetify.breakpoint.smAndDown,
            }"
          >
            <v-img
              contain
              width="150px"
              height="150px"
              class="projecs_cards_img"
              :src="`img/${project.img}`"
            >
              <span class="d-inline-block"> {{ $t(project.title) }} </span>
            </v-img>
            <v-card-text>{{ $t(project.description) }}</v-card-text>
          </div>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
import { projects } from './constants'

export default {
  name: 'ProjectsPage',
  transition: 'main',
  data() {
    return {
      selectedProject: projects[0],
      projects,
    }
  },
  methods: {
    changeCard(project) {
      this.selectedProject = project
    },
  },
}
</script>
