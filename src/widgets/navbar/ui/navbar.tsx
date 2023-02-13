import React from 'react'
import { classNames } from '@shared/class-names'
import { AppLink } from '@shared/app-link'
import { useTranslation } from 'react-i18next'
import cls from './navbar.module.scss'

function Navbar() {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <div className={classNames(cls.navbarLinksWrapper, {}, [])}>
                <AppLink theme="secondary" to="/">
                    {t('Home')}
                </AppLink>
                <AppLink theme="secondary" to="/about">
                    {t('About')}
                </AppLink>
            </div>
        </div>
    )
}

export default Navbar
