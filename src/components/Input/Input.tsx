import React from "react"
import styled from "styled-components"
import { BorderRadius, Colors } from "../../utils"

export type InputProps = {
 type: string,
 placeholder: string,
 disabled?: boolean,
 shape?: "sm" | "md" | "lg" | "full" | undefined,
}

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

const QuotidianInput = styled.input<StyleProps>`
 padding: 0.5rem;
 border: 1px solid ${Colors.gray3};
 border-radius: ${({ shape }) => handleBorderRadius(shape)};

 &:disabled {
  cursor: not-allowed;
 }

 &::placeholder {
  color: ${Colors.gray3};
 }
`

const Input = ({ type = 'text', placeholder, disabled, shape, ...props }: InputProps): JSX.Element => {
 return (
  <QuotidianInput
   type={type}
   placeholder={placeholder}
   disabled={disabled}
   shape={shape}
   {...props}
  />
 )
}

export default Input