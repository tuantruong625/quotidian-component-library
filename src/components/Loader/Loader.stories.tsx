import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Loader from './Loader'

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Loader',
 component: Loader,
} as ComponentMeta<typeof Loader>

export const Template: ComponentStory<typeof Loader> = () => <Loader />;