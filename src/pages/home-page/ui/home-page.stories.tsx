import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import HomePage from './home-page'

export default {
    title: 'pages/HomePage',
    component: HomePage,
    argTypes: {}
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage />

export const HomePageLight = Template.bind({})
HomePageLight.args = {}

export const HomePageDark = Template.bind({})
HomePageDark.args = {}
HomePageDark.decorators = [ThemeDecorator(Theme.DARK)]
