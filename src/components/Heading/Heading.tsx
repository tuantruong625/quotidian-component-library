import React from 'react'
import styled, { css } from 'styled-components'
import { Colors, Spacing, Typography } from '../../utils'
import { handleHeadingSize } from '../utils'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
 type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
 size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined,
 children?: React.ReactNode
}
interface StyleProps {
 type: string,
 size: string | undefined,
}

const QuotidianHeader = styled.h1<StyleProps>`
 margin: ${Spacing.size2} 0;
 line-height: ${Spacing.size5};
 color: ${Colors.gray6};
 font-size: ${({ size }) => handleHeadingSize(size as string)};

 ${({ type, size }) => type === 'h1' && !size && css`
  font-size: ${Typography.heading1};
 `} 
  
 ${({ type, size }) => type === 'h2' && !size && css`
  font-size: ${Typography.heading2};
 `}

 ${({ type, size }) => type === 'h2' && !size && css`
  font-size: ${Typography.heading2};
 `}

 ${({ type, size }) => type === 'h3' && !size && css`
  font-size: ${Typography.heading3};
 `}

 ${({ type, size }) => type === 'h4' && !size && css`
  font-size: ${Typography.heading4};
 `}
`

const Heading = ({ type = 'h1', size = undefined, children, ...props }: HeadingProps): JSX.Element => {
 return (
  <QuotidianHeader as={type} type={type} size={size} {...props}>{children}</QuotidianHeader>
 )
}

export default Heading