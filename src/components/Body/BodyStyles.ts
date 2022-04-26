import styled, { css } from "styled-components";
import { Typography, Spacing } from "../../utils";

type StyleProps = {
 isCapitalized: boolean,
 isUppercase: boolean
}

export const QuotidianBody = styled.p<StyleProps>`
 font-size: ${Typography.body};
 
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