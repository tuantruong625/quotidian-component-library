import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserIcon } from '@heroicons/react/outline'
import Input from './Input'

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Input',
 component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({})
Text.args = {
 type: 'text',
 placeholder: 'Placeholder',
 label: 'Text Input',
 id: 'hi'
}

export const Icon = () => {
 return (
  <Input type='text' label='Input with Icon' placeholder='Input with icon' icon={<UserIcon />} />
 )
}