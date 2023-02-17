import React, { ReactNode } from 'react'
import { ErrorBoundary } from '@shared/error-boundary'
import { PageError } from '@widgets/page-error'

interface AppErrorBoundaryProps {
    children: ReactNode
}

export const AppErrorBoundary = (props: AppErrorBoundaryProps) => {
    const { children } = props
    console.log('here')
    return (
        <ErrorBoundary renderElement={<PageError />}>{children}</ErrorBoundary>
    )
}
