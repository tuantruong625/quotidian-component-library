import React from 'react'
import Checkbox from "../Checkbox/Checkbox"
import { CheckboxGroupWrapper } from './CheckboxGroupStyles'

export interface CheckboxGroupProps extends React.HTMLProps<HTMLDivElement> {
 items: {
  label: string,
  value: string,
  name: string
 }[],
 alignment?: 'horizontal' | 'vertical',
 checkmarkIcon?: boolean
}

const CheckboxGroup = ({ items, alignment = 'horizontal', checkmarkIcon }: CheckboxGroupProps): JSX.Element => {
 return (
  <CheckboxGroupWrapper alignment={alignment} data-testid="checkbox-group">
   {
    items.map(({ label, name, value }) => (
     <Checkbox key={value} label={label} name={name} value={value} checkmarkIcon={checkmarkIcon} />
    ))
   }

  </CheckboxGroupWrapper>
 )
}

export default CheckboxGroup