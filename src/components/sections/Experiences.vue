<template>
  <section id="experiences" class="xl:min-h-[690px] overflow-hidden">
    <div class="relative md:w-fit md:ml-auto mb-8">
      <div class="bg-secondary md:w-[416px] w-full py-4 text-center flex-center relative z-[1]">
        <h2 class="md:text-h2 text-h3 whitespace-nowrap">EXPERIENCES</h2>
      </div>

      <img
        src="/src/assets/svg/dots.svg"
        alt="dots"
        class="-bottom-16 -left-64 lg:-left-40 max-w-max pointer-events-none select-none absolute"
      />

      <SectionTextBG side="right"> WHERE I'VE WORKED AT </SectionTextBG>
    </div>

    <div class="w-full flex flex-col gap-16 items-center">
      <ExperienceCard
        class="sm:w-[35rem] w-full"
        v-for="val in experiences"
        :name="val.company"
        :title="val.name"
        :date="val.date"
        :src="val.img"
      />
    </div>
  </section>
</template>

<script>
import SectionTextBG from '../SectionTextBG.vue'
import ExperienceCard from '../ExperienceCard.vue'

export default {
  components: {
    SectionTextBG,
    ExperienceCard
  },
  setup() {
    return {
      experiences: [
        {
          company: 'Neuronworks',
          name: 'Teaching Factory',
          date: 'Jul 2023 - Sep 2023',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          company: 'Curaweda',
          name: 'Teaching Factory',
          date: 'Nov 2023 - Des 2023',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          company: 'Solusi Inovasi Pesat',
          name: 'Internship',
          date: 'Nov 2023 - Jan 2024',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          company: '4 Vision Media',
          name: 'Internship',
          date: 'Jan 2023 - Present',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        }
      ]
    }
  }
}
</script>
