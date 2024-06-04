<template>
  <section
    id="projects"
    class="overflow-hidden xl:h-[690px] px-0 flex flex-col justify-between gap-8"
  >
    <div class="relative md:w-fit md:ml-auto mx-8">
      <div
        class="bg-secondary md:w-[416px] w-full py-4 text-center grid place-items-center relative z-[1]"
      >
        <h2 class="md:text-h2 text-h3 whitespace-nowrap">PROJECTS</h2>
      </div>

      <img
        src="/src/assets/svg/dots.svg"
        alt="dots"
        class="-bottom-16 -left-64 lg:-left-40 max-w-max pointer-events-none select-none absolute"
      />
    </div>

    <div class="swiper relative z-[1] w-full">
      <div class="swiper-wrapper mb-12">
        <div
          v-for="(val, i) in projects"
          class="swiper-slide !max-w-[336px] md:!max-w-none pt-4"
          :class="{ 'ml-8': i == 0, 'mr-8': i == projects.length - 1 }"
        >
          <div
            :class="`project-item-${i}`"
            class="flex flex-col gap-4 px-6 pb-8 pt-16 bg-secondary rounded relative"
          >
            <div>
              <h6 class="text-h6 font-bold select-none">{{ val.name }}</h6>
              <p class="text-p select-none">{{ val.job }}</p>

              <p class="text-small select-none mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sint officia.
                Earum id aperiam maiores corrupti labore veniam consequatur necessitatibus atque
                blanditiis velit rerum, excepturi explicabo odit libero culpa provident?
              </p>
            </div>

            <img
              :src="val.img"
              alt="Project Picture"
              class="object-cover h-[9.75rem] aspect-video pointer-events-none select-none"
            />

            <h6 class="text-h6 font-bold px-3 py-1 absolute -top-4 left-0 bg-primary select-none">
              {{ val.tag }}
            </h6>
          </div>
        </div>
      </div>

      <div class="swiper-navigation absolute top-0 z-[2] w-full h-full flex">
        <div class="swiper-prev flex-1 cursor-pointer"></div>
        <div class="swiper-next flex-1 cursor-pointer"></div>
      </div>
    </div>

    <SectionTextBG> THINGS I'VE WORKED ON </SectionTextBG>
  </section>
</template>

<script>
import SectionTextBG from '../SectionTextBG.vue'

// swiper
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css/bundle'

export default {
  components: {
    SectionTextBG
  },
  setup() {
    return {
      projectItemClasses: [],
      open: false,
      projects: [
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'Volunteer Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'Volunteer Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'Volunteer Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'Volunteer Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'Volunteer Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'Volunteer Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'Volunteer Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        }
      ]
    }
  },
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        modules: [Navigation],
        navigation: {
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next'
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3,
            freeMode: false
          }
        }
      })
    }
  }
}
</script>
