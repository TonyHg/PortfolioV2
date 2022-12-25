import { useEffect, useState } from 'react'
import { Theme } from '../common/types'

function themeToString(theme: Theme): string {
  return theme === Theme.dark ? 'dark' : 'light'
}

function stringToTheme(theme: string): Theme {
  return theme === 'dark' ? Theme.dark : Theme.light
}

function findPreferredTheme(): Theme {
  const theme = typeof window !== 'undefined' ? localStorage.theme : Theme.light
  if (theme === undefined) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Theme.dark
      : Theme.light
  }
  return stringToTheme(theme)
}

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(findPreferredTheme())

  const toggleTheme = () => {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
  }

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('dark')
    root.classList.remove('light')
    root.classList.add(themeToString(theme))
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', themeToString(theme))
    }
  }, [theme])

  return [theme, toggleTheme]
}
