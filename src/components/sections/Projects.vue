<template>
  <section id="projects" class="xl:min-h-[690px] px-0 my-24">
    <div class="flex flex-col justify-between sm:py-8">
      <SectionTitle
        side="right"
        title="PROJECTS"
        subtitle="THINGS I'VE WORKED ON"
        class="sm:mx-8 mx-6"
      />

      <div
        v-for="project in mainProjects"
        class="min-h-[50vh] md:min-h-[90vh] xl:min-h-0 bg-secondary relative z-[1] sm:mx-8 mx-6 my-12 md:pt-16 pt-10 md:pb-12 pb-8 flex flex-col md:mb-24"
      >
        <div
          class="bg-light text-secondary md:w-1/2 sm:w-[80%] w-full text-center py-4 absolute md:left-0 left-1/2 -top-14 md:translate-x-0 -translate-x-1/2"
        >
          <h2 class="md:text-h3 sm:text-h4 text-h5 whitespace-nowrap">{{ project.name }}</h2>
        </div>
        <div class="flex-1 flex flex-col sm:flex-row gap-8 md:mx-12 sm:mx-8 mx-6">
          <div class="sm:flex-1 flex flex-col gap-4">
            <img
              src="https://images.unsplash.com/photo-1714811063788-ba9c2b34f12a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
              :alt="project.name"
              class="object-cover sm:h-full h-40"
            />
            <div class="h-[6rem] flex gap-4 text-h6">
              <a
                href="#"
                target="_blank"
                aria-label="Website Link"
                class="flex-center flex-1 border border-light border-opacity-50 transition hover:bg-dark hover:border-0 group"
              >
                <i class="pi pi-globe group-hover:scale-125 transition"></i>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="Github Repo"
                class="flex-center flex-1 border border-light border-opacity-50 transition hover:bg-dark hover:border-0 group"
              >
                <i class="pi pi-github group-hover:scale-125 transition"></i>
              </a>
            </div>
          </div>
          <div class="flex-1 bg-primary text-p px-6 py-8">
            {{ project.desc }}
          </div>
        </div>
      </div>

      <div class="swiper z-[1] w-full relative">
        <div class="swiper-wrapper mb-12">
          <div
            v-for="(val, i) in projects"
            class="swiper-slide md:!max-w-none pt-4 pr-14 sm:pr-16 md:pr-0"
            :class="{ 'sm:ml-8 ml-6': i == 0, 'sm:mr-8 mr-6': i == projects.length - 1 }"
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
                class="object-cover h-[8rem] aspect-video pointer-events-none select-none"
              />

              <h6 class="text-h6 font-bold px-3 py-1 absolute -top-4 left-0 bg-primary select-none">
                {{ val.tag }}
              </h6>
            </div>
          </div>
        </div>

        <!-- <div class="swiper-navigation absolute top-0 lg:z-[2] w-full h-full flex">
          <div class="swiper-prev flex-1 cursor-pointer"></div>
          <div class="swiper-next flex-1 cursor-pointer"></div>
        </div> -->

        <div class="swiper-prev pl-8 pr-4 left-0">prev</div>
        <div class="swiper-next pr-8 pl-4 right-0">next</div>
      </div>
    </div>
  </section>
</template>

<script>
// swiper
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css/bundle'
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  components: {
    SectionTitle
  },
  setup() {
    return {
      open: false,
      mainProjects: [
        {
          name: 'ANTRIAN WEB APP',
          job: 'Front-End Developer',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D',
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sint officia.
                Earum id aperiam maiores corrupti labore veniam consequatur necessitatibus atque
                blanditiis velit rerum, excepturi explicabo odit libero culpa provident?`
        },
        {
          name: 'SMKN 4 WEBSITE',
          job: 'Front-End Developer',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D',
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sint officia.
                Earum id aperiam maiores corrupti labore veniam consequatur necessitatibus atque
                blanditiis velit rerum, excepturi explicabo odit libero culpa provident?`
        }
      ],
      projects: [
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'School Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'School Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'School Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'School Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'School Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'School Project',
          img: 'https://images.unsplash.com/photo-1713813879455-aaab0cd2b904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
        },
        {
          name: 'SCHOOL PROFILE',
          job: 'Front-End Developer',
          tag: 'School Project',
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
      const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        modules: [Navigation],
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        navigation: {
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next'
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }
      })

      const disableState = () => {
        const prev = document.querySelector('.swiper-prev')
        const next = document.querySelector('.swiper-next')
        if (swiper.isBeginning) {
          prev.classList.add('disabled')
        } else {
          prev.classList.remove('disabled')
        }
        if (swiper.isEnd) {
          next.classList.add('disabled')
        } else {
          next.classList.remove('disabled')
        }
      }

      swiper.on('slideChange', disableState)
      swiper.on('reachEnd', disableState)
      swiper.on('reachBeginning', disableState)

      disableState()
    }
  }
}
</script>

<style>
.swiper-next,
.swiper-prev {
  @apply bg-dark bg-opacity-60 select-none py-2 flex-1 cursor-pointer z-[2] absolute top-1/2 -translate-y-1/2;
}

.swiper-prev.disabled,
.swiper-next.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
