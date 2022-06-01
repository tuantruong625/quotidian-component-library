import React from 'react'
import { QuotidianCaption } from './CaptionStyles'
export interface CaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode,
  isUppercase?: boolean,
  isCapitalized?: boolean,
}

const Caption = ({ isUppercase = false, isCapitalized = false, children, ...props }: CaptionProps): JSX.Element => {
  return (
    <QuotidianCaption isCapitalized={isCapitalized} isUppercase={isUppercase} {...props}>
      {children}
    </QuotidianCaption>
  )
}

export default Caption