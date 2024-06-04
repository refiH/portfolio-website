<template>
  <div class="cursor-follower flex items-center justify-center">
    <i class="pi pi-angle-left absolute opacity-0 text-secondary" style="font-size: 1rem"></i>
    <i class="pi pi-angle-right absolute opacity-0 text-secondary" style="font-size: 1rem"></i>
    <i class="pi pi-download absolute opacity-0 text-secondary" style="font-size: 0.5rem"></i>
    <i class="pi pi-arrow-up-right absolute opacity-0 text-secondary" style="font-size: 0.5rem"></i>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'CustomCursor',
  mounted() {
    const isTouchDevice = 'ontouchstart' in window
    const createCursorFollower = () => {
      const el = document.querySelector('.cursor-follower')
      const prev = document.querySelector('.pi-angle-left')
      const next = document.querySelector('.pi-angle-right')
      const download = document.querySelector('.pi-download')
      const direct = document.querySelector('.pi-arrow-up-right')

      window.addEventListener('mousemove', (e) => {
        const { target, x, y } = e
        const isTargetLinkOrBtn =
          target?.closest('button') ||
          target?.closest('.swiper-prev') ||
          target?.closest('.swiper-next')

        const isTargetSwiperPrev = target?.closest('.swiper-prev')
        const isTargetSwiperNext = target?.closest('.swiper-next')
        const isTargetDownload = target?.closest('.resume')
        const isTargetNav = target?.closest('.nav-item')

        gsap.to(el, {
          x: x + 20,
          y: y + 20,
          duration: 0.7,
          ease: 'power4',
          opacity: isTargetLinkOrBtn ? 0.6 : 1,
          transform: `scale(${isTargetLinkOrBtn ? 4 : 1})`
        })

        gsap.to(prev, {
          duration: 0.2,
          opacity: isTargetSwiperPrev ? 1 : 0
        })

        gsap.to(next, {
          duration: 0.2,
          opacity: isTargetSwiperNext ? 1 : 0
        })

        gsap.to(download, {
          duration: 0.2,
          opacity: isTargetDownload ? 1 : 0
        })

        gsap.to(direct, {
          duration: 0.2,
          opacity: isTargetNav ? 1 : 0
        })
      })

      document.addEventListener('mouseleave', (e) => {
        gsap.to(el, {
          duration: 0.7,
          opacity: 0
        })
      })
    }

    if (!isTouchDevice) {
      createCursorFollower()
    }
  }
}
</script>

<style scoped>
.cursor-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  opacity: 0;
  z-index: 10000;
  user-select: none;
  pointer-events: none;
}

.cursor-follower {
  @apply bg-light bg-opacity-70;
}
</style>
