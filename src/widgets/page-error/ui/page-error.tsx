import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@shared/ui/button'
import cls from './page-error.module.scss'

export const PageError = () => {
    const { t } = useTranslation()
    const handleReload = useCallback(() => {
        window.location.reload()
    }, [])
    return (
        <div className={cls.pageWrapper}>
            <p>{t('Something went wrong. Please reload page.')}</p>
            <Button onClick={handleReload} theme="primary">
                {t('Reload')}
            </Button>
        </div>
    )
}
