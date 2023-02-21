import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { PageError } from './page-error'

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {}
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError />

export const PageErrorLight = Template.bind({})
PageErrorLight.args = {}

export const PageErrorDark = Template.bind({})
PageErrorDark.args = {}
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
