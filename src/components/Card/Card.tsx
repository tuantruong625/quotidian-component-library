import React from 'react'
import styled from 'styled-components'
import { Colors, Spacing, Typography } from '../../utils'
import { handleBorderRadius } from '../utils'

type StyledCardProps = {
  shape?: 'sm' | 'md' | 'lg'
  elevated?: boolean
  media?: React.ReactNode
}

export interface CardProps {
  title?: string;
  body?: string;
  caption?: string;
  shape?: 'sm' | 'md' | 'lg';
  elevated?: boolean;
  media?: React.ReactNode;
}

const QuotidianCard = styled.div<StyledCardProps>`
  padding: ${Spacing.size2};
  border: 1px solid ${Colors.gray100};
  border-radius: ${({ shape }) => handleBorderRadius(shape as string)};
  width: 12rem;
  ${({ elevated }) => elevated && `
    box-shadow: 2px 4px 8px 0px ${Colors.gray100};
  `}

  ${({ media }) => media && `
    > img {
      object-fit: cover;
      width: 100%;
    }
  `}


  > p {
    line-height: 0;
  }

  .card-title {
    color: ${Colors.gray600};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: ${Spacing.size2} 0;
  };

  .card-body {
    color: ${Colors.gray500};
    font-size: ${Typography.body};
    margin: 0;
  }

  .card-caption {
    color: ${Colors.gray400};
    font-size: ${Typography.caption};
    margin: 0;
  }

  hr {
    border-left: none;
    border-top: ${Colors.gray100};
  };
`

const Card = ({ title, body, caption, shape, elevated, media }: CardProps): JSX.Element => {

  return (
    <QuotidianCard
      role={'article'}
      {...{ shape, elevated, media }}
    >
      {media && media}
      <div>
        {media && <hr />}
        <p className='card-title'>{title && title}</p>
        <p className='card-body'>{body && body}</p>
        <p className='card-caption'>{caption && caption}</p>
      </div>
    </QuotidianCard>
  )
}

export default Card