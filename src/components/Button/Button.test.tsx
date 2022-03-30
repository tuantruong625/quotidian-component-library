import React from 'react'
import 'jest-styled-components'
import { render, screen } from '@testing-library/react'

import { BorderRadius, Colors } from '../../utils'
import Button from './Button'

const renderButton = (shape?: any, variant?: any) => {
 render(<Button label="Button" shape={shape} variant={variant} />)
}

describe('Button', () => {
 describe('handles variants', () => {
  describe('primary variant', () => {
   it('button has primary styles', () => {
    renderButton('sm', 'primary')
    expect(screen.getByText('Button')).toHaveStyleRule('background-color', `${Colors.gray7}`)
    expect(screen.getByText('Button')).toHaveStyleRule('color', `${Colors.gray1}`)
   })
  })

  describe('outline variant', () => {
   it('button has outline styles', () => {
    renderButton('sm', 'outline')
    expect(screen.getByText('Button')).toHaveStyleRule('background-color', `${Colors.white}`)
    expect(screen.getByText('Button')).toHaveStyleRule('color', `${Colors.gray7}`)
    expect(screen.getByText('Button')).toHaveStyleRule('border', `1px solid ${Colors.gray7}`)
   })
  })

  describe('text variant', () => {
   it('button has text styles', () => {
    renderButton('sm', 'text')
    expect(screen.getByText('Button')).toHaveStyleRule('background-color', `${Colors.white}`)
    expect(screen.getByText('Button')).toHaveStyleRule('color', `${Colors.gray7}`)
   })
  })
 })

 describe('handles button shape/border radius', () => {
  describe('shape is sm', () => {
   it('has sm border radius style', () => {
    renderButton('sm')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', `${BorderRadius.sm}`)
   })
  })

  describe('shape is md', () => {
   it('has md border radius style', () => {
    renderButton('md')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', `${BorderRadius.md}`)
   })
  })

  describe('shape is lg', () => {
   it('has lg border radius style', () => {
    renderButton('lg')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', `${BorderRadius.lg}`)
   })
  })

  describe('shape is full', () => {
   it('has full border radius style', () => {
    renderButton('full')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', `${BorderRadius.full}`)
   })
  })

  describe('no shape value is passed', () => {
   it('has no border radius style', () => {
    renderButton('')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', `${BorderRadius.none}`)
   })
  })
 })
})