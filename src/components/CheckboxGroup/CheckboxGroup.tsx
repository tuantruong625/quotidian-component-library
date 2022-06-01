import React from 'react'
import styled from 'styled-components'
import spacing from '../../utils/spacing'
import Checkbox from "../Checkbox/Checkbox"

type StyleProps = {
 alignment?: 'horizontal' | 'vertical',
}

export interface CheckboxGroupProps {
 items: {
  label: string,
  value: string,
  name: string
 }[],
 alignment?: 'horizontal' | 'vertical',
 checkmarkIcon?: boolean
}

const CheckboxGroupWrapper = styled.div<StyleProps>`
 display: flex;
 flex-direction: ${({ alignment }) => alignment === 'horizontal' ? 'row' : 'column'};

 > label {
  margin: ${spacing.size1};
 }
`

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