<script setup lang="ts">
useGlobalStyleCss().initialize()
</script>

<template>
  <div
    class="relative mx-4 max-h-[75rem] max-w-[22rem] rounded-2xl border-4 border-duller bg-bg shadow-2xl"
  >
    <div class="absolute top-0 right-1/2 h-6 w-32 translate-x-1/2 rounded-b-lg bg-duller" />
    <div>
      <div class="mt-8 flex w-full p-4">
        <div>
          <div class="flex">
            <div class="w-12 h-12 bg-bg-focus rounded-full shadow-inner">
              <div class="overflow-hidden inline-block flex items-center justify-center flex-col w-full h-full">
                <div class="h-2 w-2 rounded-full bg-accent-clear" />
                <div class="h-3 w-3 bg-primary-clear" />
              </div>
            </div>
            <div class="flex flex-col justify-center ml-4">
              <div class="font-bold text-sm text-clear">
                John Doe
              </div>
              <h3 class="text-xxs text-dull">
                Software Developer
              </h3>
            </div>
          </div>
        </div>
        <div class="ml-auto">
          <div class="flex bg-bg-focus rounded-full px-2 py-2 shadow-md relative">
            <div class="w-2 h-2 rounded-full bg-accent-clear absolute top-0 right-1 shadow-accent-clear shadow-md" />
            <span class="material-symbols-rounded text-dull">
              <Icon name="material-symbols:circle-notifications" size="24" />
            </span>
          </div>
        </div>
      </div>
      <div class="px-4 py-4">
        <div>
          <div class="grid grid-cols-8 bg-primary-clear p-4 rounded-lg text-primary-visible">
            <div class="col-span-2">
              <h3 class="text-xxs font-light">
                Total Hours
              </h3><span class="text-lg">23h</span>
            </div>
            <div class="divider divider-horizontal before:bg-primary-dull after:bg-primary-dull" />
            <div class="col-span-2">
              <h3 class="text-xxs font-light">
                Daily Streak
              </h3><span class="text-lg">182</span>
            </div>
            <div class="divider divider-horizontal before:bg-primary-dull after:bg-primary-dull" />
            <div class="col-span-2">
              <h3 class="text-xxs font-light">
                Friends
              </h3><span class="text-lg">7</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-4 mt-2">
        <div>
          <h3 class="text-xs font-semibold text-clear">
            Statistics
          </h3>
          <div class="flex overflow-hidden rounded-lg pt-4 pb-6">
            <div class="flex flex-col" />
            <div class="flex space-x-4 [&amp;>*]:w-32 [&amp;>*]:rounded-lg [&amp;>*]:bg-bg-focus [&amp;>*]:p-4 [&amp;>*]:text-left [&amp;>*]:shadow-md [&amp;>*]:shadow">
              <div class="bg-bg-focus">
                <div class="flex items-center justify-center w-10 h-10 mb-1 rounded-full bg-primary-clear p-2 text-primary-visible">
                  <Icon name="ic:baseline-book" size="23" />
                </div>
                <h4 class="mt-6 text-xs text-dull accent-gray-600">
                  Udemy&nbsp;<span
                    class="ml-1 rounded-lg bg-accent-dull px-2 py-[0.5px] text-xxs font-medium uppercase text-accent-clear"
                  >new</span>
                </h4><span class="text-3xl font-extrabold text-clear">12h</span>
              </div>
              <div class="bg-bg-focus">
                <div class="w-10 h-10 flex items-center justify-center mb-1 rounded-full bg-primary-clear p-2 text-primary-visible">
                  <Icon name="ic:sharp-fiber-smart-record" size="24" />
                </div>
                <h4 class="mt-6 text-xs text-dull accent-gray-600">
                  Coursera
                </h4><span class="text-3xl font-extrabold text-clear">7h</span>
              </div>
              <div class="bg-bg-focus">
                <div class="flex items-center justify-center w-10 h-10 mb-1 rounded-full bg-primary-clear p-2 text-primary-visible">
                  <Icon name="mdi:youtube" size="24" />
                </div>
                <h4 class="mt-6 text-xs text-dull accent-gray-600">
                  Youtube
                </h4><span class="text-3xl font-extrabold text-clear">2h</span>
              </div>
              <div class="bg-bg-focus">
                <div class="flex items-center justify-center w-10 h-10 mb-1 rounded-full bg-primary-clear p-2 text-primary-visible">
                  <Icon name="material-symbols:google-travel" size="24" />
                </div>
                <h4 class="mt-6 text-xs text-dull accent-gray-600">
                  Skillshare
                </h4>
                <span class="text-3xl font-extrabold text-clear">1h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 pb-4 pt-2">
        <div>
          <h2 class="font-semibold mb-4 text-xs text-clear">
            Continue watching
          </h2>
          <div class="space-y-4 [&amp;>*]:border-l-4 [&amp;>*]:border-primary-clear">
            <div class="flex justify-center items-center bg-bg-focus rounded-r-lg p-3">
              <div class="mr-auto flex justify-center items-center">
                <span class="material-symbols-rounded mb-1 text-dull mr-3">
                  <Icon name="material-symbols:vpn-lock" size="24" />
                </span>
                <div class="flex flex-col">
                  <h3 class="text-xxs font-medium text-clear">
                    Intro to Cyber-security
                  </h3><span class="text-dull text-sm">Paul Newman</span>
                </div>
              </div>
              <div class="radial-progress text-[0.6rem] text-dull" style="--value: 70; --size: 2.5rem;">
                70%
              </div>
            </div>
            <div class="flex justify-center items-center bg-bg-focus rounded-r-lg p-3">
              <div class="mr-auto flex justify-center items-center">
                <span class="material-symbols-rounded mb-1 text-dull mr-3">
                  <Icon name="material-symbols:polymer" size="24" />
                </span>
                <div class="flex flex-col">
                  <h3 class="text-xxs font-medium text-clear">
                    Intro to Polymer
                  </h3><span class="text-dull text-sm">Zahir Khan</span>
                </div>
              </div>
              <div class="radial-progress text-[0.6rem] text-dull" style="--value: 45; --size: 2.5rem;">
                45%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
