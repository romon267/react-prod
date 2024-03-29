import React, { FC, useMemo, useState } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from '../model/theme-context'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme)

    const themeProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    )

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
