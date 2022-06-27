import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';

export default {
 title: 'QuotidianComponentLibrary/👥 Molecules/Card',
 component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
 title: 'Card Component',
 body: 'This is a card component',
 caption: 'This is a caption',
}

export const CardWithMedia = Template.bind({});
CardWithMedia.args = {
 title: 'Component with media',
 body: 'This is a card component with media',
 caption: 'This is a caption with media',
 media: <img src='https://via.placeholder.com/300x200' alt='placeholder' />
}

