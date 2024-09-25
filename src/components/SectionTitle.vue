<template>
  <div class="relative md:w-fit mb-16" :class="`${side == 'right' ? 'md:ml-auto' : ''}`">
    <div class="bg-secondary md:w-[416px] w-full py-4 text-center flex-center relative z-[1]">
      <h2 class="md:text-h2 text-h3 whitespace-nowrap">
        {{ title }}
      </h2>
    </div>

    <img
      src="/src/assets/svg/dots.svg"
      alt="dots"
      class="-bottom-16 max-w-max pointer-events-none select-none absolute"
      :class="`${side == 'right' ? '-left-64 lg:-left-40' : '-right-64 lg:-right-40'}`"
    />

    <h1
      class="md:text-h1 sm:text-h2 xs:text-h3 xxs:text-h4 text-h5 whitespace-nowrap xs:text-stroke-1 text-stroke-[0.05rem] select-none pointer-events-none text-stroke-[rgba(255,239,232,0.2)] text-[transparent] absolute md:-top-16 sm:-top-12 xs:-top-10 -top-8 z-[-1]"
      :class="`${side == 'right' ? 'md:right-0' : 'left-0'}`"
    >
      {{ subtitle }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    side: {
      type: String,
      default: 'left'
    },
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    }
  },
  setup() {
    return {}
  }
}
</script>
