import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '@shared/lib/class-names'
import cls from './app-link.module.scss'

type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme
    className?: string
}

export function AppLink(props: AppLinkProps) {
    const { to, theme = 'primary', className, children, ...linkProps } = props

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...linkProps}
        >
            {children}
        </Link>
    )
}
