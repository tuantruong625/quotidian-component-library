import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroup from './RadioGroup';

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Radio Group',
 component: RadioGroup
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

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
 ]
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
 isHorizontal: true
}