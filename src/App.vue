<template>
  <Header />
  <RouterView />
  <Footer />

  <!-- mobile nav -->
  <button @click="scrollTo('#about')" class="mobile-nav-item top-[4.5rem] w-[calc(60vw)]">
    about me
  </button>
  <button @click="scrollTo('#projects')" class="mobile-nav-item top-[7.5rem] w-[calc(50vw)]">
    projects
  </button>
  <button @click="scrollTo('#experiences')" class="mobile-nav-item top-[10.5rem] w-[calc(40vw)]">
    experiences
  </button>
  <button @click="scrollTo('#contacts')" class="mobile-nav-item top-[13.5rem] w-[calc(70vw)]">
    contacts
  </button>
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
  methods: {
    scrollTo(id) {
      gsap.to(window, { scrollTo: id, duration: 1, ease: 'power3.inOut' })
    }
  }
}
</script>

<style>
#app {
  @apply bg-primary text-light font-body;
}

.mobile-nav-item {
  @apply sm:hidden fixed right-0 translate-x-[102%] z-40 bg-light text-dark text-small text-left py-3 px-4;
}
</style>
