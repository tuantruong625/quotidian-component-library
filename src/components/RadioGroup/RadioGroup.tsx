import React from 'react'
import styled from 'styled-components'
import spacing from '../../utils/spacing'
import Radio from '../Radio/Radio'

type StyleProps = {
 alignment?: 'horizontal' | 'vertical'
}

const RadioGroupWrapper = styled.div<StyleProps>`
 display: flex;
 flex-direction: ${({ alignment }) => alignment === 'horizontal' ? 'row' : 'column'};

 > label {
  margin: ${spacing.size1};
 }
`

export interface RadioGroupProps {
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