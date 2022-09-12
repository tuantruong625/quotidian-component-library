import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select'

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Select',
 component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({})
Default.args = {
 label: 'hello',
 options: [
  { value: 'hi', label: 'hello' },
  { value: 'bye', label: 'bye' },
 ]
}