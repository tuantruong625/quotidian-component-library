import React from 'react';
import { CheckIcon } from '@heroicons/react/outline'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Button',
 component: Button
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
 label: 'Primary button',
 shape: undefined,
 variant: 'primary',
 loader: false,
 disabled: false
};

export const Outline = Template.bind({});
Outline.args = {
 label: 'Outline button',
 shape: undefined,
 variant: 'outline',
 loader: false,
 disabled: false
};

export const Text = Template.bind({});
Text.args = {
 label: 'Text button',
 shape: undefined,
 variant: 'text',
 loader: false,
 disabled: false
};

export const Icon = () => {
 return (
  <Button icon={<CheckIcon />} shape='full' />
 )
}

export const IconWithText = () => {
 return (
  <Button icon={<CheckIcon />} label="Button with icon" />
 )
}