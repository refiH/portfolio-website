<template>
  <section id="contacts" class="xl:min-h-[690px]">
    <div class="relative md:w-fit">
      <div class="bg-secondary md:w-[416px] w-full py-4 text-center flex-center relative z-[1]">
        <h2 class="md:text-h2 text-h3 whitespace-nowrap">CONTACTS</h2>
      </div>

      <img
        src="/src/assets/svg/dots.svg"
        alt="dots"
        class="-bottom-16 -right-64 lg:-right-40 max-w-max pointer-events-none select-none absolute"
      />

      <SectionTextBG side="left"> INTERACT WITH ME </SectionTextBG>
    </div>
  </section>
</template>

<script>
import SectionTextBG from '../SectionTextBG.vue'

export default {
  components: {
    SectionTextBG
  },
  setup() {
    return {}
  }
}
</script>
