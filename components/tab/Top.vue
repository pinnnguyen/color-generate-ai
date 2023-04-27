<script setup lang="ts">
const { data: palettes } = useFetch('/api/palettes/top')
</script>

<template>
  <div v-for="palette in palettes" :key="palette.id" class="inline-block border-b border-slate-200 px-8">
    <Palette
      :id="palette.id"
      :palette="palette"
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
