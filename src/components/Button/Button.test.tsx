import React from 'react'
import 'jest-styled-components'
import { CheckIcon } from '@heroicons/react/outline'
import { render, screen } from '@testing-library/react'

import { BorderRadius, Colors, Spacing, Typography } from '../../utils'
import Button, { ButtonProps } from './Button'

const BUTTON_LABEL = 'Button Component'

const renderButton = (props?: ButtonProps) => {
 render(<Button label={BUTTON_LABEL} {...props} />)
}

describe.only('Button', () => {
 describe('handles button sizes', () => {
  describe.each([
   [
    'xs',
    [
     { styleRule: 'font-size', styleProperty: Typography.xsmall },
     { styleRule: 'padding', styleProperty: `${Spacing.size2} ${Spacing.size4}` },
    ]
   ],
   [
    'sm',
    [
     { styleRule: 'font-size', styleProperty: Typography.small },
     { styleRule: 'padding', styleProperty: `${Spacing.size2} ${Spacing.size4}` },
    ]
   ],
   [
    'md',
    [
     { styleRule: 'font-size', styleProperty: Typography.body },
     { styleRule: 'padding', styleProperty: `${Spacing.size3} ${Spacing.size3}` },
    ]
   ],
   [
    'lg',
    [
     { styleRule: 'font-size', styleProperty: Typography.heading3 },
     { styleRule: 'padding', styleProperty: `${Spacing.size3} ${Spacing.size4}` },
    ]
   ],
   [
    'xl',
    [
     { styleRule: 'font-size', styleProperty: Typography.heading2 },
     { styleRule: 'padding', styleProperty: `${Spacing.size3} ${Spacing.size5}` },
    ]
   ],
   [
    undefined,
    [
     { styleRule: 'font-size', styleProperty: Typography.body },
     { styleRule: 'padding', styleProperty: `${Spacing.size2} ${Spacing.size4}` },
    ]
   ],
  ])('button is %p', (size: any, expected: any) => {
   it(`has ${size} styles`, () => {
    renderButton({ size })

    expected.forEach((expectedStyle: any) => {
     expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule(expectedStyle.styleRule, expectedStyle.styleProperty)
    })
   })
  })
 })

 describe('handles variants', () => {
  describe.each([
   [
    'primary',
    [
     { styleRule: 'background-color', styleProperty: Colors.quotidian600 },
     { styleRule: 'color', styleProperty: Colors.gray100 },
    ]
   ],
   [
    'outline',
    [
     { styleRule: 'background-color', styleProperty: Colors.white },
     { styleRule: 'color', styleProperty: Colors.gray700 },
     { styleRule: 'border', styleProperty: `1px solid ${Colors.gray700}` },
    ]
   ],
   [
    'text',
    [
     { styleRule: 'background-color', styleProperty: Colors.white },
     { styleRule: 'color', styleProperty: Colors.gray700 },
    ]
   ],
  ])('%p variant', (variant: any, expected: any) => {
   it(`button has ${variant} styles`, () => {
    renderButton({ variant })

    expected.forEach((expectedStyle: any) => {
     expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule(expectedStyle.styleRule, expectedStyle.styleProperty)
    })
   })
  })
 })

 describe('handles button shape/border radius', () => {
  describe.each([
   [
    'sm', { styleRule: 'border-radius', styleProperty: BorderRadius.sm },
   ],
   [
    'md', { styleRule: 'border-radius', styleProperty: BorderRadius.md },
   ],
   [
    'lg', { styleRule: 'border-radius', styleProperty: BorderRadius.lg },
   ],
   [
    'full', { styleRule: 'border-radius', styleProperty: BorderRadius.full },
   ],
   [
    undefined, { styleRule: 'border-radius', styleProperty: BorderRadius.none },
   ],
  ])('shape is %p', (shape: any, { styleRule, styleProperty }) => {
   it(`has ${shape} border radius style`, () => {
    renderButton({ shape })
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule(styleRule, styleProperty)
   })
  })
 })

 describe('loader', () => {
  it('renders loader', () => {
   renderButton({ loader: true })
   expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
 })

 describe('icon button', () => {
  it('has icon and label', () => {
   const Icon = () =>
    <CheckIcon />

   renderButton({ icon: Icon() })
   expect(screen.getByRole('button', { name: BUTTON_LABEL })).toBeInTheDocument()
  })

  it('has icon', () => {
   const Icon = () =>
    <CheckIcon />

   renderButton({ icon: Icon(), label: undefined })
   expect(screen.getByRole('button')).toBeInTheDocument()
  })
 })
})