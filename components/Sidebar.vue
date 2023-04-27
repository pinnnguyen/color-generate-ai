<script setup lang="ts">
const currentTab = ref('top')

const tabs = [
  {
    label: 'Top',
    value: 'top',
    textClassHover: 'group-hover:bg-green-400 group-hover:text-green-100',
    background: 'bg-green-100',
    backgroundIcon: 'bg-green-400 text-green-100',
    icon: 'ic:baseline-trending-up',
  },
  {
    label: 'New',
    value: 'new',
    buttonClass: 'hover:text-yellow-600',
    textClassHover: 'group-hover:bg-yellow-400 group-hover:text-yellow-100',
    icon: 'ic:outline-cake',
    background: 'bg-yellow-100',
    backgroundIcon: 'bg-yellow-400 text-yellow-100',
  },
  {
    label: 'Saved',
    value: 'saved',
    buttonClass: 'hover:text-slate-700',
    textClassHover: 'group-hover:bg-pink-400 group-hover:text-pink-100',
    icon: 'ic:baseline-favorite-border',
    background: 'bg-pink-100',
    backgroundIcon: 'bg-pink-400 text-pink-100',
  },
  // {
  //   label: 'Views',
  //   value: 'views',
  //   buttonClass: 'hover:text-cyan-600',
  //   textClassHover: 'group-hover:bg-cyan-400 group-hover:text-cyan-100',
  //   icon: 'ic:outline-view-carousel',
  //   background: 'bg-cyan-100',
  //   backgroundIcon: 'bg-cyan-400 text-cyan-100',
  // },
  // {
  //   label: 'Edit',
  //   value: 'edit',
  //   buttonClass: 'hover:text-blue-600',
  //   textClassHover: 'group-hover:bg-blue-400 group-hover:text-blue-100',
  //   icon: 'ic:baseline-edit',
  //   background: 'bg-blue-100',
  //   backgroundIcon: 'bg-blue-400 text-blue-100',
  // },
  {
    label: 'History',
    value: 'history',
    buttonClass: 'hover:text-purple-600',
    textClassHover: 'group-hover:bg-purple-400 group-hover:text-purple-100',
    icon: 'ic:outline-history',
    background: 'bg-purple-100',
    backgroundIcon: 'bg-purple-400 text-purple-100',
  },
]

const setTab = (tab: string) => currentTab.value = tab

const tComponent = computed(() => {
  switch (currentTab.value) {
    case 'top':
      return resolveComponent('TabTop')
    case 'new':
      return resolveComponent('TabNew')
    case 'saved':
      return resolveComponent('TabSaved')
    case 'views':
      return resolveComponent('TabViews')
    case 'edit':
      return resolveComponent('TabEdit')
    case 'history':
      return resolveComponent('TabHistory')
  }
})
</script>

<template>
  <div class="sticky bottom-0 left-0 z-10 flex flex-col-reverse md:flex-row">
    <div
      class="flex w-full flex-row border border-gray-200 bg-white text-gray-700 md:flex md:w-min md:flex-col [&amp;>*]:flex [&amp;>*]:flex-col"
    >
      <button
        v-for="tab in tabs"
        :key="tab.label"
        type="button"
        :class="[currentTab === tab.value ? tab.background : '']"
        class="flex flex-col group relative inline-flex w-full items-center border-b border-gray-200 px-4 py-2 text-sm font-normal"
        @click="setTab(tab.value)"
      >
        <span
          :class="[tab.textClassHover, currentTab === tab.value ? tab.backgroundIcon : '']"
          class="w-10 h-10 material-symbols-rounded rounded-full p-2 transition-all duration-500"
        >
          <Icon :name="tab.icon" size="24" />
        </span>
        <h2 class="mt-1 text-xs text-slate-500">
          {{ tab.label }}
        </h2>
      </button>
    </div>
    <section
      class="overflow-scroll bg-slate-100 md:h-full md:max-h-screen md:min-h-screen min-w-[186px]"
    >
      <div>
        <div class="mt-4 flex gap-y-4 gap-x-4 justify-self-center md:flex-col">
          <component :is="tComponent" />
        </div>
      </div>
    </section>
  </div>
</template>
