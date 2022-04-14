import React from "react"
import { QuotidianInput } from "./InputStyles"

export type InputProps = {
  type: string,
  placeholder: string,
  disabled?: boolean,
  shape?: "sm" | "md" | "lg" | "full",
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type = 'text', placeholder, disabled, shape, onChange, ...props }: InputProps): JSX.Element => {
  return (
    <QuotidianInput
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      shape={shape}
      onChange={onChange}
      {...props}
    />
  )
}

export default Input