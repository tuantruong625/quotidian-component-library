import styled from "styled-components"
import { BorderRadius, Colors } from "../../utils"

type StyleProps = {
 shape?: "sm" | "md" | "lg" | "full",
}

const handleBorderRadius = (size?: string) => {
 switch (size) {
  case "sm":
   return `${BorderRadius.sm}`
  case "md":
   return `${BorderRadius.md}`
  case "lg":
   return `${BorderRadius.lg}`
  case "full":
   return `${BorderRadius.full}`
  default:
   return `${BorderRadius.none}`
 }
}

export const QuotidianInput = styled.input<StyleProps>`
padding: 0.5rem;
border: 1px solid ${Colors.gray3};
border-radius: ${({ shape }) => handleBorderRadius(shape)};
color: ${Colors.gray4};

&:disabled {
 cursor: not-allowed;
}

&::placeholder {
 color: ${Colors.gray3};
}
`