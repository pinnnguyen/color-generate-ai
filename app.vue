<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
.\[\&\>\*\]\:border-primary-clear > * {
    border-color: var(--primary-clear);
}

.\[\&\>\*\]\:border-l-4 > * {
    border-left-width: 4px;
}

.\[\&\>\*\]\:shadow > * {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.\[\&\>\*\]\:p-4 > * {
    padding: 1rem;
}

.\[\&\>\*\]\:rounded-lg > * {
    border-radius: 0.5rem;
}

.\[\&\>\*\]\:w-32 > * {
    width: 8rem;
}

.radial-progress:before {
    inset: 0;
    background: radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor calc(var(--value) * 1%), #0000 0);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)));
    mask: radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)));
}

.radial-progress:before, .radial-progress:after {
    position: absolute;
    border-radius: 9999px;
    content: "";
}

.radial-progress {
    position: relative;
    display: inline-grid;
    height: var(--size);
    width: var(--size);
    place-content: center;
    border-radius: 9999px;
    background-color: transparent;
    vertical-align: middle;
    box-sizing: content-box;
    --value: 0;
    --size: 5rem;
    --thickness: calc(var(--size) / 10);
}

.divider-horizontal:before {
    height: 100%;
    width: 0.125rem;
}

.after\:bg-primary-dull:after {
    content: var(--tw-content);
    background-color: var(--primary-dull);
}

.divider-horizontal:after {
    height: 100%;
    width: 0.125rem;
}

.divider:after {
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    --tw-bg-opacity: .1;
}

.divider-horizontal:after {
    height: 100%;
    width: 0.125rem;
}

.divider:after {
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    --tw-bg-opacity: .1;
}

.divider {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 1rem;
    white-space: nowrap;
}

.divider-horizontal {
    flex-direction: column;
}

.divider:before, .divider:after {
    content: "";
    flex-grow: 1;
    height: 0.125rem;
    width: 100%;
}

.divider-horizontal {
    margin: 0 1rem;
    height: auto;
    width: 2px;
}
</style>
