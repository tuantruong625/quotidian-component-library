import styled from 'styled-components'
import spacing from '../../utils/spacing'

type StyleProps = {
 alignment?: 'horizontal' | 'vertical'
}

export const RadioGroupWrapper = styled.div<StyleProps>`
 display: flex;
 flex-direction: ${({ alignment }) => alignment === 'horizontal' ? 'row' : 'column'};

 > label {
  margin: ${spacing.size1};
 }
`