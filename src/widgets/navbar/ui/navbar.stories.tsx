import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { Navbar } from './navbar'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {}
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar />

export const NavbarLight = Template.bind({})
NavbarLight.args = {}

export const NavbarDark = Template.bind({})
NavbarDark.args = {}
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)]
