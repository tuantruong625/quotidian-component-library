import React from 'react'
import styled from 'styled-components'

export interface FlexProps {
 children?: React.ReactNode,
 direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
 justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
 alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end',
 flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

interface StyleProps {
 direction: string
 justify: string
 alignItems: string
 flexWrap: string
}

export const QuotidianFlex = styled.div<StyleProps>`
 display: flex;
 justify-content: ${({ justify }) => justify};
 flex-direction: ${({ direction }) => direction};
 align-items: ${({ alignItems }) => alignItems};
 flex-wrap: ${({flexWrap}) => flexWrap};
`

const Flex = ({ direction, justify, alignItems, children, flexWrap, ...props }: FlexProps): JSX.Element => {
 return (
  <QuotidianFlex data-testid="flex-container" {...{ direction, justify, alignItems, flexWrap, ...props }}>{children}</QuotidianFlex>
 )
}

export default Flex