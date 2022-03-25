import React from "react"
import styled from "styled-components"

export type InputProps = {
 type: string,
 placeholder: string,
}

const QuotidianInput = styled.input`
 padding: 0.5rem;
`

const Input = ({ type = 'number', placeholder, ...props }: InputProps): JSX.Element => {
 return (
  <QuotidianInput
   type={type}
   placeholder={placeholder}
   {...props}
  />
 )
}

export default Input