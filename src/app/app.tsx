import '@app/styles/index.scss'
import { useTheme } from '@app/providers/theme-provider'
import { classNames } from '@shared/lib/class-names'
import AppRouter from '@app/providers/router/ui/app-router'
import { Navbar } from '@widgets/navbar'
import { Sidebar } from '@widgets/sidebar'
import { Suspense } from 'react'
import { AppErrorBoundary } from '@widgets/app-error-boundary'

export function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <AppErrorBoundary>
                    <Navbar />
                    <div className="page-content">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </AppErrorBoundary>
            </Suspense>
        </div>
    )
}
