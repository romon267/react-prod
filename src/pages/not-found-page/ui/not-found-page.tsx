import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './not-found-page.module.scss'

export const NotFoundPage = () => {
    const { t } = useTranslation()
    return (
        <div className={cls.pageWrapper}>
            <p>{t('Not found')}</p>
        </div>
    )
}
