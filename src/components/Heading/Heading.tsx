import React from 'react'
import { QuotidianHeader } from './HeadingStyles'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
 type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
 size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined,
 children?: React.ReactNode
}

const Heading = ({ type = 'h1', size = undefined, children, ...props }: HeadingProps): JSX.Element => {
 return (
  <QuotidianHeader as={type} type={type} size={size} {...props}>{children}</QuotidianHeader>
 )
}

export default Heading