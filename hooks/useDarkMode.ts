import { useEffect, useState } from 'react'
import { Theme } from '../common/types'

function themeToString(theme: Theme): string {
  return theme === Theme.dark ? 'dark' : 'light'
}

function stringToTheme(theme: string): Theme {
  return theme === 'dark' ? Theme.dark : Theme.light
}

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(
    typeof window !== 'undefined'
      ? stringToTheme(localStorage.theme)
      : Theme.light
  )

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
