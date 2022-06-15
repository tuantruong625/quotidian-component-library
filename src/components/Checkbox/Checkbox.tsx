import React from "react"
import { QuotidianCheckbox, QuotidianLabel } from "./CheckboxStyles"

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
 label: string,
 checkmarkIcon?: boolean
}

const Checkbox = ({ label, checkmarkIcon = false, ...props }: CheckboxProps): JSX.Element => {
 return (
  <QuotidianLabel htmlFor="">
   <QuotidianCheckbox type="checkbox" checkmarkIcon={checkmarkIcon} {...props} />
   <span>{label}</span>
  </QuotidianLabel>
 )
}

export default Checkbox