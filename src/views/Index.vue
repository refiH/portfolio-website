<template>
  <main class="flex flex-col">
    <CustomCursor />

    <Hero />
    <About />
    <Projects />
    <Experiences />
    <Contacts />
  </main>
</template>

<script>
import CustomCursor from '@/components/CustomCursor.vue'
import Hero from '@/components/sections/Hero.vue'
import About from '@/components/sections/About.vue'
import Projects from '@/components/sections/Projects.vue'
import Experiences from '@/components/sections/Experiences.vue'
import Contacts from '@/components/sections/Contacts.vue'

export default {
  components: {
    CustomCursor,
    Hero,
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
  @apply w-full sm:px-8 px-6 overflow-x-hidden pt-24 relative z-[1];
}

main section > div,
header > div,
footer > div {
  @apply max-w-[1600px] mx-auto;
}
</style>
