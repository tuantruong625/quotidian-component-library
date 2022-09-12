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
 media: <img src='https://images.pexels.com/photos/9318388/pexels-photo-9318388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='placeholder' />
}

