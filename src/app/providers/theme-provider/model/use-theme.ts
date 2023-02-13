import { useCallback, useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme-context'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        setTheme(newTheme)
    }, [theme])

    return {
        theme,
        toggleTheme
    }
}
