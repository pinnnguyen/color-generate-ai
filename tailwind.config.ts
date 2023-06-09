import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      // textColor: {
      //   'primary-visible': 'var(--primary-visible)',
      //   'primary-clear': 'var(--primary-clear)',
      //   'primary-dull': 'var(--primary-dull)',
      //   'accent-clear': 'var(--accent-clear)',
      //   'accent-dull': 'var(--accent-dull)',
      //   'clear': 'var(--clear)',
      //   'dull': 'var(--dull)',
      //   'duller': 'var(--duller)',
      // },
      // backgroundColor: {
      //   'bg': 'var(--bg)',
      //   'bg-focus': 'var(--bg-focus)',
      //   'primary-clear': 'var(--primary-clear)',
      //   'primary-dull': 'var(--primary-dull)',
      //   'primary-visible': 'var(--primary-visible)',
      //   'accent-clear': 'var(--accent-clear)',
      //   'accent-dull': 'var(--accent-dull)',
      //   'clear': 'var(--clear)',
      //   'dull': 'var(--dull)',
      //   'duller': 'var(--duller)',
      // },
      fontSize: {
        xxs: '0.625rem',
      },
      colors: {
        'bg': 'var(--bg)',
        'bg-focus': 'var(--bg-focus)',
        'primary-clear': 'var(--primary-clear)',
        'primary-dull': 'var(--primary-dull)',
        'primary-visible': 'var(--primary-visible)',
        'accent-clear': 'var(--accent-clear)',
        'accent-dull': 'var(--accent-dull)',
        'clear': 'var(--clear)',
        'dull': 'var(--dull)',
        'duller': 'var(--duller)',

        'secondary': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'primary': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
    },
  },
}
