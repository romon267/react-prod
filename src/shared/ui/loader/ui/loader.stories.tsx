import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@shared/config/storybook/theme-decorator'
import { Theme } from '@app/providers/theme-provider'
import { Loader } from './loader'

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {}
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader />

export const LoaderLight = Template.bind({})
LoaderLight.args = {}

export const LoaderDark = Template.bind({})
LoaderDark.args = {}
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)]
