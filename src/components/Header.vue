<template>
  <header
    :class="['header', { 'hidden-header': isHidden }]"
    class="w-full fixed left-1/2 -translate-x-1/2 top-0 z-40"
  >
    <div class="flex justify-between items-center sm:px-8 px-6 pt-6">
      <button
        @mouseover="nameHoverAnim(true)"
        @mouseleave="nameHoverAnim(false)"
        @click="scrollTo('#hero')"
        class="italic text-p text-left font-body font-light nav-item"
      >
        <div class="name-1">Refi<br /></div>
        <div class="name-2">Hikman</div>
      </button>

      <div class="sm:flex hidden gap-8 text-small">
        <button
          @mouseover="navHoverAnim('.nav-item-0', true)"
          @mouseleave="navHoverAnim('.nav-item-0', false)"
          class="nav-item-0 color-randomizer"
          aria-label="Randomize Color"
          @click="setRandomColor(this.colorState)"
        >
          <i class="pi pi-palette"></i>
        </button>
        <button
          @mouseover="navHoverAnim('.nav-item-1', true)"
          @mouseleave="navHoverAnim('.nav-item-1', false)"
          class="nav-item nav-item-1"
          @click="scrollTo('#about')"
        >
          about me
        </button>
        <button
          @mouseover="navHoverAnim('.nav-item-2', true)"
          @mouseleave="navHoverAnim('.nav-item-2', false)"
          class="nav-item nav-item-2"
          @click="scrollTo('#projects')"
        >
          projects
        </button>
        <button
          @mouseover="navHoverAnim('.nav-item-3', true)"
          @mouseleave="navHoverAnim('.nav-item-3', false)"
          class="nav-item nav-item-3"
          @click="scrollTo('#experiences')"
        >
          experiences
        </button>
        <button
          @mouseover="navHoverAnim('.nav-item-4', true)"
          @mouseleave="navHoverAnim('.nav-item-4', false)"
          class="nav-item nav-item-4"
          @click="scrollTo('#contacts')"
        >
          contacts
        </button>
      </div>

      <button @click="showMenu(!active)" class="sm:hidden text-small">menu</button>
    </div>

    <!-- mobile nav -->
    <button
      @click="setRandomColor(this.colorState)"
      aria-label="Randomize Color"
      class="mobile-nav-item color-randomizer top-[4.5rem] w-[30vw]"
    >
      <i class="pi pi-palette"></i>
    </button>
    <button @click="scrollTo('#about')" class="mobile-nav-item top-[7.5rem] w-[60vw]">
      about me
    </button>
    <button @click="scrollTo('#projects')" class="mobile-nav-item top-[10.5rem] w-[50vw]">
      projects
    </button>
    <button @click="scrollTo('#experiences')" class="mobile-nav-item top-[13.5rem] w-[40vw]">
      experiences
    </button>
    <button @click="scrollTo('#contacts')" class="mobile-nav-item top-[16.5rem] w-[70vw]">
      contacts
    </button>
  </header>

  <div
    @click="showMenu(false)"
    class="backdrop fixed top-0 h-screen w-full bg-dark bg-opacity-60 opacity-0"
  ></div>
</template>

<script>
import gsap from 'gsap'
import { ref } from 'vue'

export default {
  setup() {
    return {
      active: ref(false),
      isHidden: ref(false),
      lastScrollY: window.scrollY,
      scrollTimeout: null
    }
  },
  computed: {
    colorState() {
      return this.$store.state.colors
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    setRandomColor(items) {
      this.$store.dispatch('setRandomColor', {
        items: items
      })
    },
    nameHoverAnim(enter) {
      gsap.to('.name-2', {
        duration: 0.25,
        x: enter ? 10 : 0,
        stagger: 0.1,
        ease: 'power4.inOut'
      })
    },
    navHoverAnim(className, enter) {
      gsap.to(className, {
        duration: 0.25,
        scale: enter ? 1.2 : 1,
        ease: 'power4.inOut'
      })
    },
    handleScroll() {
      const currentScrollY = window.scrollY
      if (currentScrollY > this.lastScrollY) {
        this.isHidden = true
      } else {
        this.isHidden = false
      }
      this.lastScrollY = currentScrollY

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout)
      }
      this.scrollTimeout = setTimeout(() => {
        this.isHidden = false
      }, 2000)
    },
    scrollTo(id) {
      this.showMenu(false)

      const target = document.querySelector(id)
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
        const adjustedPosition = targetPosition - 0
        gsap.to(window, { scrollTo: adjustedPosition, duration: 1, ease: 'power3.inOut' })
      }
    },
    showMenu(state) {
      this.active = state

      gsap.to('.mobile-nav-item', {
        duration: 1,
        x: this.active ? 0 : '102%',
        stagger: 0.1,
        ease: 'power4.inOut'
      })
      gsap.to('.backdrop', {
        duration: 1,
        opacity: this.active ? 1 : 0,
        ease: 'power4.inOut',
        zIndex: this.active ? 30 : -1
      })
    }
  }
}
</script>

<style scoped>
.mobile-nav-item {
  @apply sm:hidden fixed right-0 translate-x-[102%] z-40 bg-light text-dark text-small text-left py-3 px-4;
}

.header {
  transition: all 0.3s ease-in-out;
}

.hidden-header {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}
</style>
