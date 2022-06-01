import React from 'react'
import { QuotidianLabel } from './RadioStyles'

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
 label: string
}

const Radio = ({ label, ...props }: RadioProps): JSX.Element => {
 return (
  <QuotidianLabel>
   <input type="radio" {...props} />
   <span>{label}</span>
  </QuotidianLabel>
 )
}

export default Radio