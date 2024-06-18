<template>
  <section id="contacts" class="xl:min-h-[690px] flex flex-col overflow-hidden">
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

    <div class="flex lg:flex-row flex-col gap-6 lg:my-auto lg:pb-16 my-8 z-[1]">
      <a
        v-for="val in contacts"
        :href="val.link"
        target="_blank"
        class="border-4 border-secondary flex-center flex-1 p-12 relative group bg-secondary hover:bg-transparent transition duration-500"
      >
        <i
          class="pi lg:text-h6 text-h5 lg:group-hover:scale-150 group-hover:scale-125 transition duration-300 mb-6 mt-6 lg:mt-0"
          :class="`pi-${val.icon}`"
        ></i>

        <div class="w-full h-full flex-center absolute overflow-hidden">
          <p
            class="text-p absolute lg:group-hover:bottom-6 lg:-bottom-12 lg:top-auto top-6 transition-all duration-500"
          >
            {{ val.name }}
          </p>
        </div>

        <h6
          class="text-h6 font-semibold absolute lg:group-hover:-bottom-10 bottom-6 transition-all duration-300"
        >
          {{ val.title }}
        </h6>
      </a>
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
    return {
      contacts: [
        {
          link: 'https://www.linkedin.com/in/refi-hikman-gifari-9a1761294',
          icon: 'linkedin',
          title: 'LinkedIn',
          name: 'Refi Hikman'
        },
        {
          link: 'mailto:refihikman06@gmail.com',
          icon: 'envelope',
          title: 'Email',
          name: 'refihikman06@gmail.com'
        },
        {
          link: 'https://www.instagram.com/refih15',
          icon: 'instagram',
          title: 'Instagram',
          name: 'refih15'
        },
        {
          link: 'https://github.com/refiH',
          icon: 'github',
          title: 'Github',
          name: 'refiH'
        },
        {
          link: 'https://wa.me/+6281324947355',
          icon: 'whatsapp',
          title: 'WhatsApp',
          name: '+62 813-2494-7355'
        }
      ]
    }
  }
}
</script>
