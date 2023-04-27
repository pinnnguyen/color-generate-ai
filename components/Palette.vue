<script setup lang="ts">
import type { Palette } from '~/composables/useGlobalStyleCss'

const props = defineProps<{
  palette: Palette
  id: number
  duller: string
  bg: string
  primaryClear: string
  accentDull: string
  accentClear: string
  prompt: string | null
  likes: number
}>()

const globalStyle = useGlobalStyleCss()
const storage = useLocalStorage<number[]>('saved', [])
const currentPalette = useState('currentPalette', () => {})

function doApply() {
  globalStyle.apply(props.palette)
  currentPalette.value = props.palette
}

function saved() {
  useSaved(props.id)
}

const isSaved = computed(() => storage.value.includes(props.id))

function savedOrUnsaved() {
  if (isSaved.value) {
    storage.value = storage.value.filter(i => i !== props.id)
    $fetch('/api/palettes/saved', {
      method: 'POST',
      body: {
        paletteId: props.id,
        action: 'unsave',
      },
    })
  }
  else {
    storage.value = [...storage.value, props.id]
  }
}
</script>

<template>
  <button
    :class="{ '!bg-gray-400': currentPalette?.id === palette?.id }"
    class="flex w-full items-center justify-center rounded-lg bg-white py-3 px-6 shadow-xl hover:bg-gray-200"
    @click="doApply"
  >
    <span
      class="z-40 -ml-2 h-5 w-5 rounded-full"
      :style="{ backgroundColor: duller }"
    />
    <span
      class="z-40 -ml-2 h-5 w-5 rounded-full"
      :style="{ backgroundColor: bg }"
    />
    <span
      class="z-40 -ml-2 h-5 w-5 rounded-full"
      :style="{ backgroundColor: primaryClear }"
    />
    <span
      class="z-40 -ml-2 h-5 w-5 rounded-full"
      :style="{ backgroundColor: accentDull }"
    />
    <span
      class="z-40 -ml-2 h-5 w-5 rounded-full"
      :style="{ backgroundColor: accentClear }"
    />
  </button>
  <h2 class="mt-2 hidden max-w-[7rem] text-xxs text-gray-500 md:block">
    {{ prompt }}
  </h2>
  <div class="flex w-full items-center">
    <button class="group my-2 flex items-center" @click="savedOrUnsaved()">
      <div v-if="likes" class="flex">
        <svg
          :class="{ '!fill-pink-600': isSaved }" xmlns="http://www.w3.org/2000/svg" height="16px"
          viewBox="0 0 24 24" width="16px" fill="#000000" opacity="0.8" class="mr-1 fill-slate-500"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <h3 :class="{ 'text-pink-600': isSaved }" class="text-xs text-gray-500 group-hover:text-pink-600">
          {{ likes }}
        </h3>
      </div>
    </button>
    <!--      <p class="relative ml-auto p-1 text-xxs text-slate-500"> -->
    <!--        1 mo -->
    <!--      </p> -->
  </div>
</template>
