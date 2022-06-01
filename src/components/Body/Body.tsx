import React from 'react'
import { QuotidianBody } from './BodyStyles'

export interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode,
  isCapitalized?: boolean,
  isUppercase?: boolean
}

const Body = ({ children, isCapitalized = false, isUppercase = false, ...props }: BodyProps): JSX.Element => {
  return (
    <QuotidianBody
      isCapitalized={isCapitalized}
      isUppercase={isUppercase}
      {...props}
    >
      {children}
    </QuotidianBody>
  )
}

export default Body