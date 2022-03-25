import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
 title: 'QuotidianComponentLibrary/Button',
 component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
 label: 'Primary button',
 shape: undefined,
 variant: 'primary'
};

export const Outline = Template.bind({});
Outline.args = {
 label: 'Outline button',
 shape: undefined,
 variant: 'outline'
};

export const Text = Template.bind({});
Text.args = {
 label: 'Text button',
 shape: undefined,
 variant: 'text'
};

