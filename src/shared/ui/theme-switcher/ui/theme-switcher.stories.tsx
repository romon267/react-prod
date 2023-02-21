import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { ThemeSwitcher } from './theme-switcher'

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {}
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
)

export const ThemeSwitcherLight = Template.bind({})
ThemeSwitcherLight.args = {
    size: 24
}

export const ThemeSwitcherDark = Template.bind({})
ThemeSwitcherDark.args = {
    size: 24
}
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]
