<template>
  <div v-if="loading" class="h-screen w-full fixed z-[9999] flex flex-col">
    <div class="loading-bar flex-1 w-full bg-light"></div>
    <div class="loading-bar flex-1 w-full bg-light"></div>
    <div class="loading-bar flex-1 w-full bg-light"></div>
    <div class="loading-bar flex-1 w-full bg-light"></div>
    <div class="loading-bar flex-1 w-full bg-light"></div>
  </div>

  <div v-if="loading" class="h-screen w-full fixed z-[9998] flex items-end">
    <div class="loading-bar-2 flex-1 h-full bg-secondary"></div>
    <div class="loading-bar-2 flex-1 h-full bg-secondary"></div>
    <div class="loading-bar-2 flex-1 h-full bg-secondary"></div>
    <div class="loading-bar-2 flex-1 h-full bg-secondary"></div>
    <div class="loading-bar-2 flex-1 h-full bg-secondary"></div>
  </div>

  <CustomCursor />

  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import { ref } from 'vue'
import gsap from 'gsap'
import { useDatabaseList } from 'vuefire'
import { colorsRef } from './firebaseInit'

export default {
  components: {
    Header,
    Footer,
    CustomCursor
  },
  setup() {
    return {
      loading: ref(true)
    }
  },
  computed: {
    colorState() {
      return this.$store.state.colors
    }
  },
  created() {
    let colors = useDatabaseList(colorsRef)

    setTimeout(() => {
      this.$store.dispatch('setColor', { data: colors.value }).then(() => {
        this.setRandomColor(this.colorState)
      })
    }, 2000)
  },
  mounted() {
    document.body.classList.add('overflow-hidden')
  },
  methods: {
    setRandomColor(items) {
      this.$store.dispatch('setRandomColor', {
        items: items
      })
      this.animate()
    },
    animate() {
      gsap.to('.loading-bar', {
        duration: 1,
        width: 0,
        stagger: 0.1,
        ease: 'power4.inOut',
        onComplete: this.animate2
      })
    },
    animate2() {
      gsap.to('.loading-bar-2', {
        duration: 1,
        height: 0,
        stagger: 0.1,
        ease: 'power4.inOut',
        onComplete: this.complete
      })
    },
    complete() {
      this.loading = false
      document.body.classList.remove('overflow-hidden')
    }
  }
}
</script>

<style>
#app {
  @apply text-light font-body;
}
</style>
