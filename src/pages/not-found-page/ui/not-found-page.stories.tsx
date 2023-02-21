import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { NotFoundPage } from './not-found-page'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {}
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage />

export const NotFoundPageLight = Template.bind({})
NotFoundPageLight.args = {}

export const NotFoundPageDark = Template.bind({})
NotFoundPageDark.args = {}
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)]
