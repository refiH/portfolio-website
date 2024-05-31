<template>
  <header
    :class="['header', { 'hidden-header': isHidden }]"
    class="w-full flex justify-between items-center fixed top-0 px-8 pt-6"
  >
    <button @click="scrollTo('#landing')">
      <p class="italic text-p text-left">
        Refi<br />
        Hikman
      </p>
    </button>

    <div class="sm:flex hidden gap-8 text-small">
      <button @click="scrollTo('#about')">about me</button>
      <button @click="scrollTo('#projects')">projects</button>
      <button @click="scrollTo('#experiences')">experiences</button>
      <button @click="scrollTo('#contacts')">contacts</button>
    </div>

    <button @click="showMenu" class="sm:hidden text-small">menu</button>
  </header>
</template>

<script>
import gsap from 'gsap'
import { ref } from 'vue'

export default {
  setup() {
    return {
      active: false,
      isHidden: ref(false),
      lastScrollY: window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY
      if (currentScrollY > this.lastScrollY) {
        this.isHidden = true
      } else {
        this.isHidden = false
      }
      this.lastScrollY = currentScrollY
    },
    scrollTo(id) {
      gsap.to(window, { scrollTo: id, duration: 1, ease: 'power3.inOut' })
    },
    showMenu() {
      this.active = !this.active

      if (this.active) {
        gsap.to('.mobile-nav-item', {
          duration: 1,
          x: 0,
          stagger: 0.1,
          ease: 'power4.inOut'
        })
      } else {
        gsap.to('.mobile-nav-item', {
          duration: 1,
          x: '102%',
          stagger: 0.1,
          ease: 'power4.inOut'
        })
      }
    }
  }
}
</script>

<style scoped>
.header {
  transition: all 0.3s ease-in-out;
}

.hidden-header {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
