import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Caption from './Caption'

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Typography/Caption',
 component: Caption,
} as ComponentMeta<typeof Caption>

const Template: ComponentStory<typeof Caption> = (args) => <Caption {...args} />;

export const Uppercase = Template.bind({})
Uppercase.args = {
 isUppercase: true,
 children: 'This is a uppercase caption'
}

export const Capitalized = Template.bind({})
Capitalized.args = {
 isCapitalized: true,
 children: 'This is capitalized copy'
}