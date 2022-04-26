import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from './Heading'

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Typography/Heading',
 component: Heading,
} as ComponentMeta<typeof Heading>

export const Template: ComponentStory<typeof Heading> = () => <Heading type='h3' />;