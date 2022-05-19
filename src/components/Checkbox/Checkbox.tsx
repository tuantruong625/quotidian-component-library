import React from "react"
import styled from "styled-components"
import { BorderRadius, Colors, Spacing } from "../../utils"

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
 label: string,
 checkmarkIcon?: boolean
}

type StyleProps = {
 checkmarkIcon: boolean
}

const QuotidianLabel = styled.label`
 display: flex;
 align-items: center;
 color: ${Colors.gray4};
`
const QuotidianCheckbox = styled.input<StyleProps>`
 margin-right: ${Spacing.size1};
 -webkit-appearance: none;
 appearance: none;
 color: ${Colors.gray6};
 border-radius: ${BorderRadius.sm};
 height: ${Spacing.size4};
 width: ${Spacing.size4};
 border: 1px solid ${Colors.gray6};
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 

 &::before {
  content: "";
  height: 10px;
  width: 10px;
  ${({ checkmarkIcon }) => checkmarkIcon && `clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);`}
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em ${Colors.primary3};
  background-color: ${Colors.primary3};
  border-radius: ${BorderRadius.sm};
 }

 &:checked::before {
  transform: scale(1);
 }
`

const Checkbox = ({ label, checkmarkIcon = false, ...props }: CheckboxProps): JSX.Element => {
 return (
  <QuotidianLabel htmlFor="">
   <QuotidianCheckbox type="checkbox" checkmarkIcon={checkmarkIcon} {...props} />
   <span>{label}</span>
  </QuotidianLabel>
 )
}

export default Checkbox