<script setup lang="ts">
import Palette from '~/components/Palette.vue'

const globalStyle = useGlobalStyleCss()
const storage = useLocalStorage<number[]>('saved', [])

const { data: palettes } = useFetch('/api/palettes/saved', {
  query: {
    paletteIds: storage.value,
  },
})
</script>

<template>
  <div v-for="palette in palettes" :key="palette.id" class="inline-block border-b border-slate-200 px-8">
    <Palette
      :id="palette.id"
      :duller="palette.duller"
      :bg="palette.bg"
      :primary-clear="palette.primaryClear"
      :accent-dull="palette.accentDull"
      :accent-clear="palette.accentClear"
      :prompt="palette.prompt"
      :likes="palette.likes"
    />
  </div>
</template>
