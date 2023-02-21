import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { AppLink } from './app-link'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {}
} as ComponentMeta<typeof AppLink>

// @ts-ignore
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const AppLinkPrimaryLight = Template.bind({})
AppLinkPrimaryLight.args = {
    children: 'Link text',
    theme: 'primary',
    to: '/'
}

export const AppLinkPrimaryDark = Template.bind({})
AppLinkPrimaryDark.args = {
    children: 'Link text',
    theme: 'primary',
    to: '/'
}
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const AppLinkSecondaryLight = Template.bind({})
AppLinkSecondaryLight.args = {
    children: 'Link text',
    theme: 'secondary',
    to: '/'
}

export const AppLinkSecondaryDark = Template.bind({})
AppLinkSecondaryDark.args = {
    children: 'Link text',
    theme: 'secondary',
    to: '/'
}
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
