import React from 'react'
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { Button } from './button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {}
} as ComponentMeta<typeof Button>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {
    children: 'Text',
    theme: 'primary'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
    theme: 'primary'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearLight = Template.bind({})
ClearLight.args = {
    children: 'Text',
    theme: 'clear'
}

export const ClearDark = Template.bind({})
ClearDark.args = {
    children: 'Text',
    theme: 'clear'
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineLight = Template.bind({})
OutlineLight.args = {
    children: 'Text',
    theme: 'outline'
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    theme: 'outline'
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
