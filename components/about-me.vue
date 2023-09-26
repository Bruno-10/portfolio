<template>
  <v-row no-gutters class="d-flex justify-space-between">
    <v-col class="align-end d-flex flex-column mr-14">
      <div v-for="s in sectionsHalfLength" :key="s">
        <v-tooltip content-class="tooltip__glow primary" right>
          <template #activator="{ on, attrs }">
            <span
              v-bind="attrs"
              :class="`d-flex align-center justify-center tooltips text__glow
                  ${sections[s].title.classes}
                `"
              @mouseover="sections[s].hover = true"
              @mouseleave="sections[s].hover = false"
              v-on="on"
            >
              {{ sections[s].title.text }}
              <v-card :class="`glow rounded ${sections[s].img.classes}`">
                <v-img
                  contain
                  :width="sections[s].img.width"
                  :height="sections[s].img.height"
                  :src="
                    sections[s].hover
                      ? sections[s].img.src
                      : sections[s].img.staticSrc
                  "
                />
              </v-card>
            </span>
          </template>
          <!-- renders elements depending on section style -->
          <span v-if="sections[s].childs.type === 'span'">
            {{ sections[s].childs.content }}
          </span>
          <v-list
            v-if="sections[s].childs.type === 'rating'"
            class="transparent"
          >
            <v-list-item
              v-for="(child, i) in sections[s].childs.content"
              :key="i"
              class="d-flex flex-column justify-center align-start"
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
            </v-list-item>
          </v-list>
        </v-tooltip>
        <br />
      </div>
    </v-col>
    <v-col class="ml-14 align-start d-flex flex-column">
      <div v-for="b in sectionsSecondHalf" :key="b">
        <v-tooltip content-class="tooltip__glow primary" left>
          <template #activator="{ on, attrs }">
            <span
              v-bind="attrs"
              :class="`d-flex align-center justify-center tooltips text__glow
                  ${sections[b].title.classes}
                `"
              @mouseover="sections[b].hover = true"
              @mouseleave="sections[b].hover = false"
              v-on="on"
            >
              <v-card :class="`glow rounded ${sections[b].img.classes}`">
                <v-img
                  contain
                  :max-width="sections[b].img.width"
                  :max-height="sections[b].img.height"
                  :src="
                    sections[b].hover
                      ? sections[b].img.src
                      : sections[b].img.staticSrc
                  "
                  class="image-transition"
                  @mouseover="sections[b].hover = true"
                  @mouseleave="sections[b].hover = false"
                />
              </v-card>
              {{ sections[b].title.text }}
            </span>
          </template>
          <!-- renders elements depending on section style -->
          <span v-if="sections[b].childs.type === 'span'">
            <strong> {{ sections[b].childs.content }} </strong>
          </span>
          <v-list
            v-if="sections[b].childs.type === 'rating'"
            class="transparent"
          >
            <v-list-item
              v-for="(child, i) in sections[b].childs.content"
              :key="i"
              class="d-flex flex-column justify-center align-start"
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
            </v-list-item>
          </v-list>
        </v-tooltip>
        <br />
      </div>
    </v-col>
  </v-row>
</template>
<script>
import sections from '@/components/constants'

export default {
  name: 'AboutMeMobile',
  computed: {
    sections() {
      return sections
    },
    sectionsHalfLength() {
      return [...Array(sections.length / 2).keys()]
    },
    sectionsSecondHalf() {
      return Array.from(
        { length: sections.length / 2 },
        (_, k) => k + sections.length / 2,
      )
    },
  },
}
</script>
