import { useState } from 'react'
import { classNames } from '@shared/lib/class-names'
import { ThemeSwitcher } from '@shared/ui/theme-switcher'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from '@shared/ui/lang-switcher/ui/lang-switcher'
import cls from './sidebar.module.scss'

export function Sidebar() {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(
                cls.sidebar,
                { [cls.collapsed]: collapsed },
                []
            )}
        >
            <button type="button" onClick={onToggle}>
                {t('toggle')}
            </button>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher size={40} />
            </div>
        </div>
    )
}
