import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { routeConfig } from '../config/route-config'

function AppRouter() {
    const { t } = useTranslation()

    return (
        <div>
            <Suspense fallback={<div>{t('Loading...')}</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <div className="page-wrapper">{element}</div>
                            }
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppRouter
