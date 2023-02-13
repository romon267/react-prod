import React from 'react'
import { Theme, useTheme } from '@app/providers/theme-provider'
import { classNames } from '@shared/class-names'
import MoonIcon from '@shared/assets/icons/moon.svg'
import SunIcon from '@shared/assets/icons/sun.svg'
import { Button } from '@shared/button'

interface ThemeSwitcherProps {
    className?: string
    size?: number
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className, size = 24 } = props
    const { toggleTheme, theme } = useTheme()

    return (
        <Button theme="clear" className={classNames(className)} onClick={toggleTheme}>
            {theme === Theme.DARK ? (
                <SunIcon width={size} height={size} />
            ) : (
                <MoonIcon fill="#fff" stroke="#fff" width={size} height={size} />
            )}
        </Button>
    )
}
