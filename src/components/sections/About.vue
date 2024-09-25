<template>
  <section id="about" class="xl:min-h-[690px] bg-dark/50">
    <div class="flex flex-col gap-8 sm:py-8">
      <SectionTitle side="left" title="ABOUT ME" subtitle="GET TO KNOW ME" />

      <div class="flex-1 flex flex-col lg:flex-row gap-6 lg:mb-12">
        <div class="flex-1 flex flex-col">
          <img
            src="https://plus.unsplash.com/premium_photo-1675629118284-c9eb039df8cd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about picture"
            class="flex-1 max-h-48 aspect-video mb-6 object-cover"
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
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import ResumeButton from '@/components/ResumeButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  components: {
    ResumeButton,
    SectionTitle
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
