import React from 'react'
import { Loader } from '@shared/ui/loader'
import cls from './page-loader.module.scss'

export const PageLoader = () => (
    <div className={cls.pageWrapper}>
        <Loader />
    </div>
)
