<template>
  <section id="hero" class="h-screen flex-center pt-0">
    <div class="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-baseline relative">
      <!-- anim -->
      <div class="w-[18rem] sm:h-[6.75rem] h-[5rem] relative z-[1] overflow-hidden">
        <h1
          v-for="(val, i) in texts"
          :key="i"
          class="absolute left-0 sm:-bottom-6 -bottom-2 opacity-0 sm:text-h1 text-h2"
          :class="`anim-${i}`"
        >
          {{ val }}
        </h1>

        <div
          class="w-full h-full bg-primary relative sm:translate-y-[40px] translate-y-[20px] anim-box"
        ></div>
      </div>

      <!-- endlessly text -->
      <h5 class="italic sm:text-h5 text-h6">with endless possibilities</h5>

      <!-- seamless text -->
      <h1
        class="absolute -top-12 -left-0 lg:text-[120px] sm:text-h1 text-h2 text-stroke-[0.05rem] text-stroke-[rgba(255,239,232,0.7)] text-[transparent] select-none"
      >
        SEAMLESS
      </h1>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'

export default {
  setup() {
    return {
      texts: ['PRODUCT', 'DESIGN', 'CRAFT', 'CODE']
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const timeline = gsap.timeline({ repeat: -1 })

      this.texts.forEach((val, i) => {
        timeline.to(
          `.anim-${i}`,
          {
            duration: 2,
            opacity: 1,
            ease: 'steps(1)',
            yoyo: true,
            repeat: 1
          },
          i * 2
        )
      })

      gsap.from('.anim-box', {
        duration: 1,
        y: 200,
        ease: 'power4.inOut',
        yoyo: true,
        repeat: -1
      })
    }
  }
}
</script>
