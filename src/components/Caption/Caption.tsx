import React from 'react'
import styled, { css } from 'styled-components'
import { Colors, Spacing, Typography } from '../../utils'

type CaptionProps = {
  children: React.ReactNode,
  isUppercase?: boolean,
  isCapitalized?: boolean,
}

type StyleProps = {
  isCapitalized: boolean,
  isUppercase: boolean
}

const QuotidianCaption = styled.p<StyleProps>`
 font-size: ${Typography.caption};
 color: ${Colors.gray4};
 margin: ${Spacing.size1} 0;

 ${({ isCapitalized, isUppercase }) => isCapitalized && !isUppercase && css`
  &::first-letter {
   text-transform: capitalize;
  }
 `}

 ${({ isUppercase, isCapitalized }) => isUppercase && !isCapitalized && css`
   text-transform: uppercase;
   letter-spacing: ${Spacing.size1};
 `}
`

const Caption = ({ isUppercase = false, isCapitalized = false, children, ...props }: CaptionProps): JSX.Element => {
  return (
    <QuotidianCaption isCapitalized={isCapitalized} isUppercase={isUppercase} {...props}>
      {children}
    </QuotidianCaption>
  )
}

export default Caption