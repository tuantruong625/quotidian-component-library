import styled, { css } from 'styled-components'
import { Colors, Spacing, Typography } from '../../utils'

type StyleProps = {
  isCapitalized: boolean,
  isUppercase: boolean
}

export const QuotidianCaption = styled.p<StyleProps>`
font-size: ${Typography.caption};
color: ${Colors.gray400};
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