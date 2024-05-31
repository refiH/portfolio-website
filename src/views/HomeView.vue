<template>
  <main>
    <Landing />
    <About />
    <Projects />
    <Experiences />
    <Contacts />
  </main>
</template>

<script>
import Landing from '@/components/sections/Landing.vue'
import About from '@/components/sections/About.vue'
import Projects from '@/components/sections/Projects.vue'
import Experiences from '@/components/sections/Experiences.vue'
import Contacts from '@/components/sections/Contacts.vue'

export default {
  components: {
    Landing,
    About,
    Projects,
    Experiences,
    Contacts
  },
  setup() {
    return {}
  },
  methods: {}
}
</script>

<style>
main section {
  @apply min-h-screen px-8;
}
</style>
