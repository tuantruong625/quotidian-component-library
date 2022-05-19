import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Checkbox',
 component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
 label: 'Checkbox',
 defaultChecked: true,
};

export const CheckmarkIcon = Template.bind({});
CheckmarkIcon.args = {
 label: 'Checkbox',
 defaultChecked: true,
 checkmarkIcon: true,
};
