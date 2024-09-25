<template>
  <section id="experiences" class="xl:min-h-[690px] overflow-hidden bg-dark pb-24 md:pt-28">
    <div class="sm:py-8">
      <SectionTitle side="right" title="EXPERIENCES" subtitle="WHERE I'VE WORKED AT" />

      <div class="w-full flex flex-col gap-20 items-center relative">
        <ExperienceCard
          v-for="(val, i) in experiences"
          class="sm:w-[32rem] w-full"
          :company="val.company"
          :title="val.title"
          :date="val.date"
          :src="val.img"
          :desc="val.desc"
          :img-class="{ 'p-4': i == 0 || i == 3 }"
        />
        <div
          class="border border-primary border-opacity-35 h-full absolute left-0 top-0 lg:block hidden"
        >
          <div class="bg-primary text-light p-2 absolute -top-4 left-1/2 -translate-x-1/2"></div>
          <div class="bg-primary text-light p-2 absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ExperienceCard from '../ExperienceCard.vue'
import SectionTitle from '../SectionTitle.vue'

export default {
  components: {
    ExperienceCard,
    SectionTitle
  },
  setup() {
    return {
      experiences: [
        {
          company: 'PT. Neuronworks',
          title: 'Teaching Factory',
          date: 'Jul 2023 - Sep 2023',
          img: 'images/logo-neuronworks.png',
          desc: `In this teaching factory program, my team of 4 designed and developed a landing page for the company. I contributed as a UI/UX Designer and Frontend Developer.`
        },
        {
          company: 'Curaweda',
          title: 'Teaching Factory',
          date: 'Nov 2023 - Des 2023',
          img: 'images/logo-curaweda.png',
          desc: `In this teaching factory program, my team and I developed a hotel management system web app which I contributed as a Frontend Developer.`
        },
        {
          company: 'PT. Solusi Inovasi Pesat',
          title: 'Internship',
          date: 'Nov 2023 - Jan 2024',
          img: 'images/logo-sip.jpeg',
          desc: `My team and I developed a project management system web app for the company. I contributed as a UI/UX Designer and Frontend Developer.`
        },
        {
          company: '4 Vision Media',
          title: 'Internship',
          date: 'Jan 2024 - Present',
          img: 'images/logo-4vm.png',
          desc: `Me and my team was given a task to designed and developed a queue management web app. I contributed as a Frontend Developer at first then later as a Fullstack Developer.`
        }
      ]
    }
  }
}
</script>
