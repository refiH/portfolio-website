<template>
  <section id="about" class="overflow-hidden xl:h-[690px] h-full">
    <div
      class="grid md:grid-rows-3 grid-cols-8 gap-4 relative z-[1] xl:absolute xl:top-1/2 xl:-translate-y-1/2"
    >
      <div
        class="about-me bg-secondary py-4 text-center md:col-span-3 sm:col-span-5 col-span-8 grid place-items-center w-0 opacity-0"
      >
        <h2 class="md:text-h2 text-h3 whitespace-nowrap">ABOUT ME</h2>
      </div>

      <img
        src="https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D"
        alt="About Picture"
        class="col-start-1 md:col-end-3 sm:col-end-5 col-end-9 md:row-span-4 sm:row-span-2 sm:!h-full !h-32 w-full"
      />

      <!-- <img
        src="https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D"
        class="md:col-start-3 sm:col-start-5 col-start-1 md:col-end-5 sm:col-end-7 col-end-5 md:row-span-2"
      /> -->

      <div
        @mouseover="resumeHover"
        @mouseleave="resumeLeave"
        class="resume group border-[4px] border-secondary md:col-start-7 col-start-1 md:col-end-9 sm:col-end-5 col-end-9 md:row-start-3 row-start-4 overflow-hidden flex items-center justify-center cursor-pointer"
      >
        <h1
          class="md:text-h1 text-h2 whitespace-nowrap text-stroke-1 text-stroke-light text-[transparent] transition group-hover:text-light group-hover:text-stroke-0"
        >
          MY RESUME
        </h1>
      </div>

      <img
        src="https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D"
        alt="About Picture"
        class="md:col-start-3 sm:col-start-5 col-start-1 md:col-end-5 col-end-9 md:row-span-2 md:row-start-4 sm:row-start-2 sm:!h-full !h-32 w-full"
      />

      <div
        class="bg-secondary sm:col-start-5 col-start-1 col-end-9 row-span-2 md:row-start-4 px-6 py-8"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque, sint dignissimos unde,
        tempora tempore quibusdam aliquid eum quam, hic optio. Est dolorem veritatis asperiores iste
        assumenda quia necessitatibus itaque.
      </div>
    </div>

    <SectionTextBG> GET TO KNOW ME </SectionTextBG>
  </section>
</template>

<script>
import gsap from 'gsap'
import SectionTextBG from '@/components/SectionTextBG.vue'

export default {
  components: {
    SectionTextBG
  },
  setup() {
    return {}
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      gsap.to('.about-me', {
        duration: 1,
        ease: 'power4.inOut',
        width: '100%',
        opacity: 1,
        scrollTrigger: {
          trigger: '.about-me',
          start: '20% bottom'
        }
      })
    },
    resumeHover() {
      if (window.innerWidth >= 768) {
        gsap.to('.resume', {
          duration: 0.5,
          ease: 'power1.inOut',
          width: '140%',
          x: '-29%'
        })
      }
    },
    resumeLeave() {
      if (window.innerWidth >= 768) {
        gsap.to('.resume', {
          duration: 0.8,
          ease: 'power1.inOut',
          width: '100%',
          x: 0
        })
      }
    }
  }
}
</script>

<style scoped>
img {
  @apply object-cover h-full;
}

.resume:hover {
  background-color: var(--secondary);
}
</style>
