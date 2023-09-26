<template>
  <div class="contact__container pages_main__container">
    <v-card class="contact_card d-flex align-center justify-center flex-column">
      <v-card-title
        class="text-decoration-underline"
        :class="$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h3'"
      >
        {{ $t('contact.title') }}
      </v-card-title>
      <span class="text-subtitle-2">{{ $t('contact.subtitle') }}</span>
      <v-card-text class="d-flex align-items-center justify-center">
        <v-btn
          icon
          x-large
          class="mx-4"
          href="https://github.com/Bruno-10"
          target="”_blank”"
        >
          <font-awesome-icon icon="fa-brands fa-square-github" class="fa-2x" />
        </v-btn>
        <v-btn
          icon
          x-large
          class="mx-4"
          href="https://linkedin.com/in/bruno-belucci"
          target="”_blank”"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-2x" />
        </v-btn>
        <v-btn icon x-large class="mx-4" href="mailto:brunobelucci10@gmail.com">
          <font-awesome-icon icon="fa-solid fa-inbox" class="fa-2x" />
        </v-btn>
      </v-card-text>
      <v-btn
        color="secondary"
        href="https://drive.google.com/file/d/1AUkArLl3s4RD9aK0ygPUav0mzwKgNNFD/view?usp=sharing"
        target="”_blank”"
      >
        {{ $t('contact.seeResume') }}</v-btn
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  transition: 'main',
}
</script>
