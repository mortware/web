import { useEffect, useState } from 'react'

type ThemeMode = 'system' | 'light' | 'dark'

const THEME_STORAGE_KEY = 'mortware-theme'

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('system')
  const [systemDark, setSystemDark] = useState(false)
  const isDark = mode === 'dark' || (mode === 'system' && systemDark)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
      if (saved === 'system' || saved === 'light' || saved === 'dark') {
        setMode(saved)
      }
    } catch {
      // Ignore storage access failures (private mode, blocked storage, etc.)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const updateSystem = () => setSystemDark(media.matches)

    updateSystem()
    media.addEventListener('change', updateSystem)
    return () => media.removeEventListener('change', updateSystem)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    try {
      if (mode === 'system') {
        window.localStorage.removeItem(THEME_STORAGE_KEY)
      } else {
        window.localStorage.setItem(THEME_STORAGE_KEY, mode)
      }
    } catch {
      // Ignore storage access failures (private mode, blocked storage, etc.)
    }
  }, [mode])

  return (
    <div className="absolute right-4 top-4">
      <div className="flex items-center rounded-full border border-slate-300 bg-slate-100 p-1 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
        <button
          type="button"
          onClick={() => setMode('system')}
          className={`rounded-full p-2 transition ${
            mode === 'system'
              ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
              : 'bg-transparent'
          }`}
          aria-pressed={mode === 'system' ? 'true' : 'false'}
          aria-label="Use system theme"
          title="System"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <path d="M8 20h8" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setMode('light')}
          className={`rounded-full p-2 transition ${
            mode === 'light'
              ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
              : 'bg-transparent'
          }`}
          aria-pressed={mode === 'light' ? 'true' : 'false'}
          aria-label="Use light theme"
          title="Light"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setMode('dark')}
          className={`rounded-full p-2 transition ${
            mode === 'dark'
              ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
              : 'bg-transparent'
          }`}
          aria-pressed={mode === 'dark' ? 'true' : 'false'}
          aria-label="Use dark theme"
          title="Dark"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
