import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { LangSwitcher } from './lang-switcher'

export default {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    argTypes: {}
} as ComponentMeta<typeof LangSwitcher>

// @ts-ignore
const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher />

export const LangSwitcherLight = Template.bind({})
LangSwitcherLight.args = {}

export const LangSwitcherDark = Template.bind({})
LangSwitcherDark.args = {}
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]
