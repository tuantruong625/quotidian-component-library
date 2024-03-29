import styled, { css } from "styled-components";
import { Typography, Spacing, Colors } from "../../utils";

type StyleProps = {
  isCapitalized: boolean,
  isUppercase: boolean
}

export const QuotidianBody = styled.p<StyleProps>`
 font-size: ${Typography.body};
 color: ${Colors.gray600};
 margin: ${Spacing.size2} 0;
 line-height: ${Spacing.size5};
 
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