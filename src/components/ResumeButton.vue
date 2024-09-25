<template>
  <button
    @click="download(url, 'resume_refi-hikman-gifari.pdf')"
    class="resume group py-1 border-[4px] border-secondary flex-center cursor-pointer relative"
  >
    <div class="overflow-hidden flex-center">
      <h2
        class="xs:text-h2 text-h3 whitespace-nowrap text-stroke-1 text-stroke-light text-[transparent] transition group-hover:text-light group-hover:text-stroke-0"
      >
        MY RESUME
      </h2>
    </div>

    <h6
      class="text-h6 font-bold whitespace-nowrap bg-light text-secondary absolute -top-4 -left-2 px-4 -rotate-3 group-hover:-rotate-12 transition duration-200"
    >
      Download
    </h6>
  </button>
</template>

<script>
import gsap from 'gsap'
import { ref } from 'vue'
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'
import { saveAs } from 'file-saver'

export default {
  setup() {
    return {
      url: ref(null)
    }
  },
  mounted() {
    const storage = useFirebaseStorage()
    const mountainFileRef = storageRef(storage, 'resume.pdf')
    const { url } = useStorageFile(mountainFileRef)

    this.url = url
  },
  methods: {
    download(url, label) {
      saveAs(url, label)
      // axios
      //   .get(url, {
      //     responseType: 'blob'
      //   })
      //   .then((response) => {
      //     const blob = new Blob([response.data], { type: 'application/pdf' })
      //     const link = document.createElement('a')
      //     link.href = URL.createObjectURL(blob)
      //     link.download = label
      //     link.click()
      //     URL.revokeObjectURL(link.href)
      //   })
      //   .catch(console.error)
    }
    // resumeHover() {
    //   if (window.innerWidth >= 768) {
    //     gsap.to('.resume', {
    //       duration: 0.5,
    //       ease: 'power1.inOut',
    //       width: '120%'
    //     })
    //   }
    // },
    // resumeLeave() {
    //   if (window.innerWidth >= 768) {
    //     gsap.to('.resume', {
    //       duration: 0.8,
    //       ease: 'power1.inOut',
    //       width: '100%'
    //     })
    //   }
    // }
  }
}
</script>

<style scoped>
.resume:hover {
  background-color: var(--secondary);
}
</style>
