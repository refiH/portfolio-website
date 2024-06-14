<template>
  <h1
    class="md:text-h1 sm:text-h2 xs:text-h3 xxs:text-h4 text-h5 whitespace-nowrap xs:text-stroke-1 text-stroke-[0.05rem] select-none pointer-events-none text-stroke-[rgba(255,239,232,0.2)] text-[transparent] absolute md:-top-16 sm:-top-12 xs:-top-10 -top-8 z-[-1]"
    :class="`${side == 'right' ? 'md:right-0' : 'left-0'}`"
  >
    <slot />
  </h1>
</template>

<script>
export default {
  props: {
    side: {
      type: String
    }
  },
  setup() {
    return {}
  }
}
</script>
