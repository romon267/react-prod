import React, { ReactNode } from 'react'
import { ErrorBoundary } from '@shared/error-boundary'
import { PageError } from '@widgets/page-error'

interface GlobalErrorBoundaryProps {
    children: ReactNode
}

export const GlobalErrorBoundary = (props: GlobalErrorBoundaryProps) => {
    const { children } = props
    console.log('global')
    return (
        <ErrorBoundary renderElement={<PageError />}>{children}</ErrorBoundary>
    )
}
