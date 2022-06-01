import styled, { css } from 'styled-components'
import { Colors, Spacing, Typography } from '../../utils'
import { handleHeadingSize } from '../utils'

interface StyleProps {
 type: string,
 size: string | undefined,
}

export const QuotidianHeader = styled.h1<StyleProps>`
 margin: ${Spacing.size2} 0;
 line-height: ${Spacing.size5};
 color: ${Colors.gray6};
 font-size: ${({ size }) => handleHeadingSize(size as string)};

 ${({ type, size }) => type === 'h1' && !size && css`
  font-size: ${Typography.heading1};
 `} 
  
 ${({ type, size }) => type === 'h2' && !size && css`
  font-size: ${Typography.heading2};
 `}

 ${({ type, size }) => type === 'h2' && !size && css`
  font-size: ${Typography.heading2};
 `}

 ${({ type, size }) => type === 'h3' && !size && css`
  font-size: ${Typography.heading3};
 `}

 ${({ type, size }) => type === 'h4' && !size && css`
  font-size: ${Typography.heading4};
 `}
`