export default async function useSaved(paletteId: number) {
  const storage = useLocalStorage<number[]>('saved', [])
  if (!storage.value.includes(paletteId))
    storage.value.push(paletteId)

  await $fetch('api/palettes/saved', {
    method: 'POST',
    body: {
      paletteId,
    },
  })
}
