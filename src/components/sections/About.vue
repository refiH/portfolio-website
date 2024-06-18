<template>
  <section
    id="about"
    class="xl:min-h-[690px] h-full flex flex-col gap-8 overflow-hidden bg-primary"
  >
    <div class="bg-secondary md:w-[416px] w-full py-4 flex-center relative">
      <h2 class="md:text-h2 text-h3 whitespace-nowrap">ABOUT ME</h2>

      <img
        src="/src/assets/svg/dots.svg"
        alt="dots"
        class="-bottom-16 -right-40 pointer-events-none select-none absolute z-[-1]"
      />

      <SectionTextBG side="left"> GET TO KNOW ME </SectionTextBG>
    </div>

    <div class="flex-1 flex flex-col lg:flex-row gap-6 lg:mb-12">
      <div class="flex-1 flex flex-col">
        <img
          src="https://plus.unsplash.com/premium_photo-1675629118284-c9eb039df8cd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about picture"
          class="flex-1 max-h-48 aspect-video mb-6"
        />
        <ResumeButton />
      </div>
      <div class="flex-1 bg-secondary p-4 rounded">
        <div class="p-6 border-4 border-primary h-full rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque, sint dignissimos
          unde, tempora tempore quibusdam aliquid eum quam, hic optio. Est dolorem veritatis
          asperiores iste assumenda quia necessitatibus itaque.
        </div>
      </div>
      <div class="flex-1 bg-secondary"></div>
    </div>

    <div class="absolute bg-dark bg-opacity-50 w-full h-full top-0 left-0 z-[-2]"></div>
  </section>
</template>

<script>
import gsap from 'gsap'
import SectionTextBG from '@/components/SectionTextBG.vue'
import ResumeButton from '@/components/ResumeButton.vue'

export default {
  components: {
    SectionTextBG,
    ResumeButton
  },
  setup() {
    return {}
  },
  mounted() {
    // this.animate()
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
    }
  }
}
</script>

<style scoped>
img {
  @apply object-cover;
}
</style>
