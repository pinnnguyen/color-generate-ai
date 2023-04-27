export interface Palette {
  bg: string
  bgFocus: string
  primaryClear: string
  primaryDull: string
  primaryVisible: string
  accentClear: string
  accentDull: string
  clear: string
  dull: string
  duller: string
}
export default function useGlobalStyleCss() {
  const initialize = () => {
    document.documentElement.style.setProperty('--bg', '#F5F3F7')
    document.documentElement.style.setProperty('--bg-focus', '#E9E4ED')
    document.documentElement.style.setProperty('--primary-clear', '#8B5FBF')
    document.documentElement.style.setProperty('--primary-dull', '#61398F')
    document.documentElement.style.setProperty('--primary-visible', '#FFFFFF')
    document.documentElement.style.setProperty('--accent-clear', '#D6C6E1')
    document.documentElement.style.setProperty('--accent-dull', '#9A73B5')
    document.documentElement.style.setProperty('--clear', '#4A4A4A')
    document.documentElement.style.setProperty('--dull', '#878787')
    document.documentElement.style.setProperty('--duller', '#FFFFFF')
  }

  const apply = (palette: Palette) => {
    document.documentElement.style.setProperty('--bg', palette.bg)
    document.documentElement.style.setProperty('--bg-focus', palette.bgFocus)
    document.documentElement.style.setProperty('--primary-clear', palette.primaryClear)
    document.documentElement.style.setProperty('--primary-dull', palette.primaryDull)
    document.documentElement.style.setProperty('--primary-visible', palette.primaryVisible)
    document.documentElement.style.setProperty('--accent-clear', palette.accentClear)
    document.documentElement.style.setProperty('--accent-dull', palette.accentDull)
    document.documentElement.style.setProperty('--clear', palette.clear)
    document.documentElement.style.setProperty('--dull', palette.dull)
    document.documentElement.style.setProperty('--duller', palette.duller)
  }

  return {
    apply,
    initialize,
  }
}
