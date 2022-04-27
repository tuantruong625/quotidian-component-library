import styled, { css } from "styled-components";
import { Typography, Spacing, Colors } from "../../utils";

type StyleProps = {
  isCapitalized: boolean,
  isUppercase: boolean
}

export const QuotidianBody = styled.p<StyleProps>`
 font-size: ${Typography.body};
 color: ${Colors.gray6};
 margin: ${Spacing.size2} 0;
 
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