import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Body from './Body'

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Typography/Body',
 component: Body,
} as ComponentMeta<typeof Body>

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Uppercase = Template.bind({})
Uppercase.args = {
 isUppercase: true,
 children: 'This is uppercase copy'
}

export const Capitalized = Template.bind({})
Capitalized.args = {
 isCapitalized: true,
 children: 'This is capitalized copy'
}