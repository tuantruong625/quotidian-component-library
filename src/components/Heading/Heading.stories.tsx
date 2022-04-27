import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from './Heading'

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Typography/Heading',
 component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const h1 = Template.bind({})
h1.args = {
 type: 'h1',
 children: 'Heading 1'
}

export const h2 = Template.bind({})
h2.args = {
 type: 'h2',
 children: 'Heading 2'
}

export const h3 = Template.bind({})
h3.args = {
 type: 'h3',
 children: 'Heading 3'
}

export const h4 = Template.bind({})
h4.args = {
 type: 'h4',
 children: 'Heading 4'
}