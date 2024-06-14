<template>
  <div class="flex flex-col justify-center">
    <div class="h-[128px] bg-white flex-center px-6 py-4 border-8 border-secondary">
      <img :src="src" :alt="`${company}`" class="object-contain w-full h-full" :class="imgClass" />
    </div>

    <div class="mt-6 sm:mx-12">
      <h5 class="text-h6 font-semibold flex flex-col xs:flex-row xs:items-center">
        <span>{{ company }}</span>
        <span class="flex-1 border border-secondary mx-4 xs:block hidden"></span>
        <span class="text-p text-secondary border border-secondary px-2 py-1 h-fit my-2 xs:my-0">
          {{ title }}
        </span>
      </h5>
      <div class="text-small lg:hidden flex items-center gap-2 mt-1">
        <div class="bg-secondary text-light p-2 pb-1">
          <i class="pi pi-calendar-clock"></i>
        </div>
        <div>{{ date }}</div>
      </div>
      <p class="text-small mt-4">{{ desc }}</p>
    </div>

    <div class="text-small absolute left-6 lg:flex gap-4 items-center hidden">
      <div class="absolute -left-6 border-2 border-primary w-6"></div>
      <div class="bg-secondary text-light p-2 pb-1">
        <i class="pi pi-calendar-clock"></i>
      </div>
      <div>{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: String,
    title: String,
    date: String,
    src: String,
    desc: String,
    imgClass: Object
  },
  setup() {
    return {}
  }
}
</script>
