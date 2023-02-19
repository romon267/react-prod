import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@shared/ui/button'
import cls from './lang-switcher.module.scss'

export function LangSwitcher() {
    const { i18n } = useTranslation()

    const toggle = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }, [i18n.language])

    return (
        <Button onClick={toggle} theme="clear" className={cls.button}>
            {i18n.language === 'ru' ? 'Русский' : 'English'}
        </Button>
    )
}
