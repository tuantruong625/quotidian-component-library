import React, { createElement } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { Colors, Spacing, Typography } from '../../utils'

export interface HeadingProps {
 type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
 children: React.ReactNode
}
interface StyleProps {
 type: string
}

const QuotidianHeader = styled.h1<StyleProps>`
 margin: ${Spacing.size5} 0;
 line-height: ${Spacing.size7};
 color: ${Colors.gray6};

 ${({ type }) => type === 'h1' && css`
  font-size: ${Typography.heading1};
 `} 
  
 ${({ type }) => type === 'h2' && css`
  font-size: ${Typography.heading2};
 `}

 ${({ type }) => type === 'h2' && css`
  font-size: ${Typography.heading2};
 `}

 ${({ type }) => type === 'h3' && css`
  font-size: ${Typography.heading3};
 `}

 ${({ type }) => type === 'h4' && css`
  font-size: ${Typography.heading4};
 `}
`

const Heading = ({ type = 'h1', children, ...props }: HeadingProps): JSX.Element => {
 return (
  <QuotidianHeader as={type} type={type}>{children}</QuotidianHeader>
 )
}

export default Heading