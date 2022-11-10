import { size3, size2 } from './../../utils/spacing';
import { ReactElement } from "react"
import styled, { css } from "styled-components"
import { Colors, Spacing } from "../../utils"
import { handleBorderRadius } from "../utils"

type StyleProps = {
  shape?: "sm" | "md" | "lg" | "full",
  icon?: ReactElement<IconProps>,
}

export type IconProps = {
  height: string,
  width: string,
  color: string,
}

const debug = (item: any) => console.log(item);

export const QuotidianLabel = styled.label<StyleProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: ${Spacing.size3};
  color: ${Colors.gray400};
  position: relative;
  
  > span:first-letter {
    text-transform: uppercase;
  }

  > svg {
      position: absolute;
      top: 1.5rem;
      margin: 0 ${Spacing.size2};
      color: ${Colors.success};
      width: 1em;
      height: 1em;
  }

  > input {
    padding: ${({ icon }) => icon ? `${Spacing.size2} ${Spacing.size2} ${Spacing.size2} ${Spacing.size5}` : `${Spacing.size2}`};
  }
`


export const QuotidianInput = styled.input<StyleProps>`
display: flex;
align-items: center;
padding: ${Spacing.size2};
border: 1px solid ${Colors.gray400};
border-radius: ${({ shape }) => handleBorderRadius(shape as string)};
color: ${Colors.gray400};

&:disabled {
  cursor: not-allowed;
}

&::placeholder {
  color: ${Colors.gray300};
}

&:focus {
  outline: none;
  border-color: ${Colors.primary1};
}
`

