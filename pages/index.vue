<script setup lang="ts">
const prompt = ref('')
const loading = ref(false)
const historys = useLocalStorage('history', [])

function isURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
        + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' // domain name
        + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
        + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
        + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
        + '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
  return pattern.test(str)
}

async function generate() {
  loading.value = true
  try {
    const palette = await $fetch('/api/generate', {
      method: 'POST',
      body: {
        prompt: prompt.value,
        isURL: isURL(prompt.value),
      },
    })

    loading.value = false

    if (palette) {
      console.log('palette', palette)
      historys.value = [palette, ...historys.value]
      useGlobalStyleCss().apply(palette)
    }
  }

  catch (e) {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-w-screen relative flex min-h-screen flex-col-reverse text-black md:flex-row">
    <Sidebar />
    <div class="flex min-h-screen grow flex-col items-center">
      <div class="m-8 ml-8 w-full max-w-[40rem]">
        <p
          class="mb-2 rounded-full bg-yellow-50 px-2 py-0.5 text-xxs text-yellow-600"
        >
          If a request takes
          longer than 20 seconds please refresh the tab and try again. I am working on resolving this issue.
        </p>
        <p class="mb-2 rounded-full bg-green-50 px-2 py-0.5 text-xxs text-green-600">
          Wrong hex value issue has
          been resolved. Sorry for the inconvenience.
        </p>
        <div class="ng-untouched ng-pristine ng-valid ng-submitted">
          <label
            for="default-search"
            class="sr-only mb-2 text-sm font-medium text-gray-900"
          >Search</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon name="ic:baseline-palette" class="text-gray-400" size="25" />
            </div>
            <input
              id="default-search"
              v-model="prompt" type="search" placeholder="Enter a prompt for AI or Website URL" required=""
              class="!focus-visible:border-blue-500 !focus-visible:ring-blue-500 block w-full rounded-lg border border-gray-100 bg-gray-50 p-4 pl-12 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
            <button
              class="absolute right-2.5 bottom-2.5 h-9 w-24 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              @click="generate"
            >
              <svg v-if="loading" aria-hidden="true" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-4 w-4 animate-spin fill-purple-600 text-gray-200 dark:text-gray-600"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
              <span v-else> Generate </span>
            </button>
          </div>
        </div>
      </div>
      <div class="m-2 rounded-lg">
        <div class="opacity-0 lg:opacity-100">
          <ClientOnly>
            <TemplateMobileApp />
          </ClientOnly>
        </div>
      </div>
      <div class="p-4">
        <div class="mb-2 flex items-center p-2">
          <div class="mr-4 hidden border-2 border-gray-100 text-sm shadow-lg md:flex">
            <button class="group relative flex h-16 w-10 items-center justify-center bg-primary-clear transition-all hover:w-40 text-white">
              <h6 class="invisible group-hover:visible">
                #EE1D52
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>
            <button class="group relative flex h-16 w-10 items-center justify-center bg-primary-visible transition-all hover:w-40 text-black">
              <h6 class="invisible group-hover:visible">
                #ffcddf
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>

            <button class="group relative flex h-16 w-10 items-center justify-center bg-accent-clear transition-all hover:w-40 text-black">
              <h6 class="invisible group-hover:visible">
                #FFC107
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>
            <button class="group relative flex h-16 w-10 items-center justify-center bg-accent-dull transition-all hover:w-40 text-white">
              <h6 class="invisible group-hover:visible">
                #916400
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>
            <button class="group relative flex h-16 w-10 items-center justify-center bg-bg transition-all hover:w-40 text-black">
              <h6 class="invisible group-hover:visible">
                #F7F7F7
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>
            <button class="group relative flex h-16 w-10 items-center justify-center bg-bg-focus transition-all hover:w-40 text-black">
              <h6 class="invisible group-hover:visible">
                #ededed
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>
            <button class="group relative flex h-16 w-10 items-center justify-center bg-duller transition-all hover:w-40 text-black">
              <h6 class="invisible group-hover:visible">
                #c4c4c4
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>
            <button class="group relative flex h-16 w-10 items-center justify-center bg-clear transition-all hover:w-40 text-white">
              <h6 class="invisible group-hover:visible">
                #333333
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>
            <button class="group relative flex h-16 w-10 items-center justify-center bg-dull transition-all hover:w-40 text-white">
              <h6 class="invisible group-hover:visible">
                #5c5c5c
              </h6><span
                class="invisible absolute inset-0 top-4 opacity-0 group-hover:visible"
              > copied! </span>
            </button>
          </div>
        </div>
        <label
          for="my-modal-6"
          class="flex cursor-pointer items-center justify-center rounded-md bg-gray-100 px-6 py-3 text-sm text-gray-500 hover:bg-gray-200"
        ><span
          class="material-symbols-rounded mr-2"
        > copy_all </span>
          Export</label>
        <input
          id="my-modal-6"
          type="checkbox"
          class="modal-toggle"
        >
        <!--        <div class="modal modal-bottom sm:modal-middle"> -->
        <!--          <div class="modal-box bg-slate-100"> -->
        <!--            <label -->
        <!--              for="my-modal-6" -->
        <!--              class="btn btn-circle btn-sm absolute right-3 top-3 bg-slate-100 text-slate-600" -->
        <!--            >✕</label> -->
        <!--            <pre class="text-sm text-slate-600">    &#45;&#45;primary-100:#EE1D52; -->
        <!--          &#45;&#45;primary-200:#ff607e; -->
        <!--          &#45;&#45;primary-300:#ffcddf; -->
        <!--          &#45;&#45;accent-100:#FFC107; -->
        <!--          &#45;&#45;accent-200:#916400; -->
        <!--          &#45;&#45;text-100:#333333; -->
        <!--          &#45;&#45;text-200:#5c5c5c; -->
        <!--          &#45;&#45;bg-100:#F7F7F7; -->
        <!--          &#45;&#45;bg-200:#ededed; -->
        <!--          &#45;&#45;bg-300:#c4c4c4; -->
        <!--            </pre> -->
        <!--            <div class="modal-action"> -->
        <!--              <label -->
        <!--                for="my-modal-6" -->
        <!--                class="btn bg-slate-700 text-slate-100 hover:bg-slate-600" -->
        <!--              >Copy!</label> -->
        <!--            </div> -->
        <!--          </div> -->
        <!--        </div> -->
      </div>
    </div>
  </div>
</template>
