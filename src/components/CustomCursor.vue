<template>
  <div id="cursor-follower" class="hidden lg:flex flex-col items-center justify-center">
    <i class="pi pi-chevron-left absolute opacity-0 text-secondary" style="font-size: 0.3rem"></i>
    <i class="pi pi-chevron-right absolute opacity-0 text-secondary" style="font-size: 0.3rem"></i>
    <i class="pi pi-download absolute opacity-0 text-secondary" style="font-size: 0.3rem"></i>
    <i class="pi pi-arrow-up-right absolute opacity-0 text-secondary" style="font-size: 0.3rem"></i>

    <div class="flex w-full h-full cursor-colors opacity-0">
      <div
        v-for="color in colorState"
        class="flex-1"
        :style="`background-color: ` + color.primary"
      ></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'CustomCursor',
  computed: {
    colorState() {
      return this.$store.state.colors
    }
  },
  mounted() {
    this.createCursorFollower()
    // const isTouchDevice = 'ontouchstart' in window
    // if (!isTouchDevice && window.innerWidth >= 1024) {
    // }
  },
  methods: {
    createCursorFollower() {
      const isTouchDevice = 'ontouchstart' in window
      const el = document.querySelector('#cursor-follower')
      const prev = document.querySelector('.pi-chevron-left')
      const next = document.querySelector('.pi-chevron-right')
      const download = document.querySelector('.pi-download')
      const colors = document.querySelector('.cursor-colors')
      const direct = document.querySelector('.pi-arrow-up-right')
      const nav = document.querySelector('.nav-item')
      let rect = nav.getBoundingClientRect()

      window.addEventListener('mousemove', (e) => {
        const { target, x, y } = e
        const isTargetLinkOrBtn =
          target?.closest('button') ||
          target?.closest('a') ||
          target?.closest('.swiper-prev') ||
          target?.closest('.swiper-next')

        const isTargetSwiperPrev = target?.closest('.swiper-prev')
        const isTargetSwiperNext = target?.closest('.swiper-next')
        const isTargetDownload = target?.closest('.resume')
        const isTargetColorRandomizer = target?.closest('.color-randomizer')
        const isTargetNav = target?.closest('.nav-item') || target?.closest('a')
        const isTargetLight = target?.closest('.bg-light')

        gsap.to(el, {
          x: x + (isTargetLinkOrBtn ? 40 : 20),
          y: y + (isTargetLinkOrBtn ? 40 : 20),
          duration: 0.5,
          ease: 'power4',
          opacity: isTargetLinkOrBtn ? 0.4 : 1,
          transform: `scale(${isTargetLinkOrBtn ? 6 : 1})`,
          backgroundColor: isTargetLight ? '#191717B3' : '#FFEFE8B3'
        })

        if (!isTouchDevice)
          gsap.to(nav, {
            x: rect.x * 0.015 + x * 0.015,
            y: rect.y * 0.015 + y * 0.015,
            duration: 0.5,
            ease: 'power4'
          })

        this.isHovered(prev, isTargetSwiperPrev)
        this.isHovered(next, isTargetSwiperNext)
        this.isHovered(download, isTargetDownload)
        this.isHovered(colors, isTargetColorRandomizer)
        this.isHovered(direct, isTargetNav)
      })

      document.addEventListener('mouseleave', (e) => {
        gsap.to(el, {
          duration: 0.5,
          opacity: 0
        })
      })
    },
    isHovered(target, state) {
      if (state)
        gsap.to(target, {
          duration: 0.2,
          opacity: 1
        })
      else
        gsap.to(target, {
          duration: 0.2,
          opacity: 0
        })
    }
  }
}
</script>

<style scoped>
#cursor-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  /* border-radius: 100%; */
  opacity: 0;
  z-index: 10000;
  user-select: none;
  pointer-events: none;
}

#cursor-follower {
  @apply bg-light bg-opacity-70;
}
</style>
