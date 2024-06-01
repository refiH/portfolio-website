<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

export default {
  components: {
    Header,
    Footer
  },
  setup() {
    return {}
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  },
  methods: {}
}
</script>

<style>
#app {
  @apply bg-primary text-light font-body;
}
</style>
