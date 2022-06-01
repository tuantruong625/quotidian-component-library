import React from 'react'
import Radio from '../Radio/Radio'
import { RadioGroupWrapper } from './RadioGroupStyles'
export interface RadioGroupProps extends React.HTMLProps<HTMLDivElement> {
 items: {
  name: string,
  value: string,
  label: string,
 }[],
 alignment?: 'horizontal' | 'vertical'
}

const RadioGroup = ({ items, alignment }: RadioGroupProps): JSX.Element => {
 return (
  <RadioGroupWrapper data-testid="radio-group" alignment={alignment}>
   {
    items.map(({ label, name, value }) => (
     <Radio key={value} label={label} name={name} value={value} />
    ))
   }
  </RadioGroupWrapper>
 )
}

export default RadioGroup