<template>
  <section id="contacts" class="flex flex-col overflow-hidden pt-24">
    <div class="w-full sm:py-8">
      <SectionTitle side="left" title="CONTACTS" subtitle="INTERACT WITH ME" />

      <div class="flex lg:flex-row flex-col gap-6 lg:pb-16 my-8 z-[1]">
        <a
          v-for="val in contacts"
          :href="val.link"
          target="_blank"
          class="border-4 border-secondary flex-center flex-1 p-12 relative group bg-secondary hover:bg-transparent hover:border-transparent transition duration-500"
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
    </div>
  </section>
</template>

<script>
import SectionTitle from '../SectionTitle.vue'

export default {
  components: {
    SectionTitle
  },
  setup() {
    return {
      contacts: [
        {
          link: 'mailto:refihikman06@gmail.com',
          icon: 'envelope',
          title: 'Email',
          name: 'refihikman06@gmail.com'
        },
        {
          link: 'https://www.linkedin.com/in/refi-hikman-gifari-9a1761294',
          icon: 'linkedin',
          title: 'LinkedIn',
          name: 'Refi Hikman'
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
        }
      ]
    }
  }
}
</script>
