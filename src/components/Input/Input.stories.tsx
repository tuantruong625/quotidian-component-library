import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input'

export default {
 title: 'QuotidianComponentLibrary/Input',
 component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({})
Primary.args = {
 type: 'text',
 placeholder: 'primary text input'
}