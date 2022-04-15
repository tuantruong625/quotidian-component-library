import styled from "styled-components"
import { Colors } from "../../utils"
import { handleBorderRadius } from "../utils"

type StyleProps = {
  shape?: "sm" | "md" | "lg" | "full",
}

export const QuotidianInput = styled.input<StyleProps>`
padding: 0.5rem;
border: 1px solid ${Colors.gray3};
border-radius: ${({ shape }) => handleBorderRadius(shape as string)};
color: ${Colors.gray4};

&:disabled {
 cursor: not-allowed;
}

&::placeholder {
 color: ${Colors.gray3};
}
`