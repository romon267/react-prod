import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import AboutPage from './about-page'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {}
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />

export const AboutPageLight = Template.bind({})
AboutPageLight.args = {}

export const AboutPageDark = Template.bind({})
AboutPageDark.args = {}
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)]
