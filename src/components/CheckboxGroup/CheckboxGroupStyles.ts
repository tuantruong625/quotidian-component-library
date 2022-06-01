import styled from 'styled-components'
import spacing from '../../utils/spacing'

type StyleProps = {
 alignment?: 'horizontal' | 'vertical',
}

export const CheckboxGroupWrapper = styled.div<StyleProps>`
 display: flex;
 flex-direction: ${({ alignment }) => alignment === 'horizontal' ? 'row' : 'column'};

 > label {
  margin: ${spacing.size1};
 }
`