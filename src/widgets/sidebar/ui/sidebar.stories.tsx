import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { Sidebar } from './sidebar'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {}
} as ComponentMeta<typeof Sidebar>

// @ts-ignore
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const SidebarLight = Template.bind({})
SidebarLight.args = {}

export const SidebarDark = Template.bind({})
SidebarDark.args = {}
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)]
