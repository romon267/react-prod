import { render } from 'react-dom'
import { App } from '@app/app'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from '@app/providers/theme-provider/ui/theme-provider'

import '@shared/config/i18n/i18n'
import { GlobalErrorBoundary } from '@widgets/global-error-boundary'

const rootContainer = document.getElementById('root')

render(
    <BrowserRouter>
        <ThemeProvider>
            <GlobalErrorBoundary>
                <App />
            </GlobalErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    rootContainer
)
