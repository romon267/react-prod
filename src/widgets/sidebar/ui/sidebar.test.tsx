import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from '@widgets/sidebar'
import { renderWithTranslation } from '@shared/lib/tests/render-with-translation'

describe('Sidebar', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Sidebar collapse', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('toggle-collapse-btn')
        fireEvent.click(toggleBtn)
        const sidebar = screen.getByTestId('sidebar')
        expect(sidebar).toHaveClass('collapsed')
    })
})
