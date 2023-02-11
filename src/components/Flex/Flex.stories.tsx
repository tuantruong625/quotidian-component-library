import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Flex from './Flex'
import styled from 'styled-components';
import { BorderRadius, Colors, Spacing } from '../../utils';

export default {
 title: 'QuotidianComponentLibrary/⚛️ Atoms/Layout/Flex',
 component: Flex,
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const FlexBlocks = () => {
 const blocks = [1, 2, 3, 4, 5, 6]
 return (
  blocks.map((block) => <StyleBlock>{block}</StyleBlock>)
 )
}

const StyleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${BorderRadius.md};
  color: ${Colors.gray100};
  width: 50px;
  height: 50px;
  background-color: ${Colors.quotidianRed};
  margin: ${Spacing.size2};
`

export const row = Template.bind({})
row.args = {
 direction: 'row',
 alignItems: 'center',
 children: <FlexBlocks />
}

