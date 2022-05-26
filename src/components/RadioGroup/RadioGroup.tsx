import React from 'react'
import styled from 'styled-components'
import Radio from '../Radio/Radio'

type StyleProps = {
 isHorizontal?: boolean
}

const RadioGroupWrapper = styled.div<StyleProps>`
 display: flex;
 flex-direction: ${({ isHorizontal }) => isHorizontal ? 'row' : 'column'};
 justify-content: center;
 align-items: center;
`

export interface RadioGroupProps {
 items: {
  name: string,
  value: string,
  label: string,
 }[],
 isHorizontal?: boolean
}

const RadioGroup = ({ items, isHorizontal }: RadioGroupProps): JSX.Element => {
 return (
  <RadioGroupWrapper data-testid="radio-group" isHorizontal={isHorizontal}>
   {
    items.map(({ label, name, value }) => (
     <Radio key={value} label={label} name={name} value={value} />
    ))
   }
  </RadioGroupWrapper>
 )
}

export default RadioGroup