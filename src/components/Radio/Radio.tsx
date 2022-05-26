import React from 'react'
import styled from 'styled-components'

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
 label: string
}

const QuotidianLabel = styled.label`
 display: flex;
 align-items: center;
`


const Radio = ({ label, ...props }: RadioProps): JSX.Element => {
 return (
  <QuotidianLabel>
   <input type="radio" {...props} />
   <span>{label}</span>
  </QuotidianLabel>
 )
}

export default Radio