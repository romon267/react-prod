import React, { ButtonHTMLAttributes } from 'react'
import { classNames } from '@shared/lib/class-names'
import cls from './button.module.scss'

type ButtonTheme = 'clear' | 'primary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme
    className?: string
}

export function Button(props: ButtonProps) {
    const { theme = 'clear', className, children, ...otherProps } = props
    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
