import React, { ReactElement } from "react"
import { IconProps, QuotidianInput, QuotidianLabel } from "./InputStyles"

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string,
  label: string,
  placeholder: string,
  disabled?: boolean,
  shape?: "sm" | "md" | "lg" | "full",
  icon?: ReactElement<IconProps>
}

const Input = ({ type = 'text', placeholder, disabled, shape, label, icon, ...props }: InputProps): JSX.Element => {
  return (
    <QuotidianLabel icon={icon}>
      <span>{label}</span>
      <QuotidianInput
        {...{ type, disabled, shape, placeholder, ...props }}
      />
      {icon && icon}
    </QuotidianLabel>
  )
}

export default Input