<template>
  <div>
    <div class="h-[128px] bg-light border-8 border-secondary flex-center p-6">
      <img :src="src" :alt="name" class="object-cover w-full h-full" />
    </div>

    <div class="mt-4 sm:ml-16">
      <h5 class="text-h5 font-medium whitespace-nowrap">{{ title }}</h5>
      <p class="text-small">{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    src: String,
    name: String
  },
  setup() {
    return {}
  }
}
</script>
