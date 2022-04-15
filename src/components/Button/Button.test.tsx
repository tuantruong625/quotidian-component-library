import React from 'react'
import 'jest-styled-components'
import { CheckIcon } from '@heroicons/react/outline'
import { render, screen } from '@testing-library/react'

import { BorderRadius, Colors } from '../../utils'
import Button, { ButtonProps } from './Button'

const BUTTON_LABEL = 'Button Component'

const renderButton = (props?: ButtonProps) => {
 render(<Button label={BUTTON_LABEL} {...props} />)
}

describe('Button', () => {

 describe('handles variants', () => {
  describe('primary variant', () => {
   it('button has primary styles', () => {
    renderButton({ variant: 'primary' })
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('background-color', `${Colors.gray7}`)
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('color', `${Colors.gray1}`)
   })
  })

  describe('outline variant', () => {
   it('button has outline styles', () => {
    renderButton({ variant: 'outline' })
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('background-color', `${Colors.white}`)
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('color', `${Colors.gray7}`)
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('border', `1px solid ${Colors.gray7}`)
   })
  })

  describe('text variant', () => {
   it('button has text styles', () => {
    renderButton({ variant: 'text' })
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('background-color', `${Colors.white}`)
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('color', `${Colors.gray7}`)
   })
  })
 })

 describe('handles button shape/border radius', () => {
  describe('shape is sm', () => {
   it('has sm border radius style', () => {
    renderButton({ shape: 'sm' })
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('border-radius', `${BorderRadius.sm}`)
   })
  })

  describe('shape is md', () => {
   it('has md border radius style', () => {
    renderButton({ shape: 'md' })
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('border-radius', `${BorderRadius.md}`)
   })
  })

  describe('shape is lg', () => {
   it('has lg border radius style', () => {
    renderButton({ shape: 'lg' })
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('border-radius', `${BorderRadius.lg}`)
   })
  })

  describe('shape is full', () => {
   it('has full border radius style', () => {
    renderButton({ shape: 'full' })
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('border-radius', `${BorderRadius.full}`)
   })
  })

  describe('no shape value is passed', () => {
   it('has no border radius style', () => {
    renderButton()
    expect(screen.getByRole('button', { name: BUTTON_LABEL })).toHaveStyleRule('border-radius', `${BorderRadius.none}`)
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