import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxGroup from './CheckboxGroup';

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Checkbox Group',
 component: CheckboxGroup
} as ComponentMeta<typeof CheckboxGroup>

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />;

export const VerticalGroup = Template.bind({});
VerticalGroup.args = {
 items: [
  {
   name: 'Foo',
   value: 'Foo',
   label: 'Foo'
  },
  {
   name: 'Foo',
   value: 'Baz',
   label: 'Baz'
  },
  {
   name: 'Foo',
   value: 'Bar',
   label: 'Bar'
  },
 ],
 alignment: 'vertical'
}

export const HorizontalGroup = Template.bind({});
HorizontalGroup.args = {
 items: [
  {
   name: 'Foo',
   value: 'Foo',
   label: 'Foo'
  },
  {
   name: 'Foo',
   value: 'Baz',
   label: 'Baz'
  },
  {
   name: 'Foo',
   value: 'Bar',
   label: 'Bar'
  },
 ],
 alignment: 'horizontal',
 checkmarkIcon: true
}