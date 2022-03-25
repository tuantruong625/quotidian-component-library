import React from 'react'
import 'jest-styled-components'
import { render, screen } from '@testing-library/react'
import Button from './Button'
import { gray1, gray7, white } from '../../utils/colours'

const renderButton = (shape?: any, variant?: any) => {
 render(<Button label="Button" shape={shape} variant={variant} />)
}

describe('Button', () => {
 describe('handles variants', () => {
  describe('primary variant', () => {
   it('button has primary styles', () => {
    renderButton('sm', 'primary')
    expect(screen.getByText('Button')).toHaveStyleRule('background-color', `${gray7}`)
    expect(screen.getByText('Button')).toHaveStyleRule('color', `${gray1}`)
   })
  })

  describe('outline variant', () => {
   it('button has outline styles', () => {
    renderButton('sm', 'outline')
    expect(screen.getByText('Button')).toHaveStyleRule('background-color', `${white}`)
    expect(screen.getByText('Button')).toHaveStyleRule('color', `${gray7}`)
    expect(screen.getByText('Button')).toHaveStyleRule('border', `1px solid ${gray7}`)
   })
  })

  describe('text variant', () => {
   it('button has text styles', () => {
    renderButton('sm', 'text')
    expect(screen.getByText('Button')).toHaveStyleRule('background-color', `${white}`)
    expect(screen.getByText('Button')).toHaveStyleRule('color', `${gray7}`)
   })
  })
 })

 describe('handles button shape/border radius', () => {
  describe('shape is sm', () => {
   it('has sm border radius style', () => {
    renderButton('sm')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', '5px')
   })
  })

  describe('shape is md', () => {
   it('has md border radius style', () => {
    renderButton('md')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', '10px')
   })
  })

  describe('shape is lg', () => {
   it('has lg border radius style', () => {
    renderButton('lg')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', '16px')
   })
  })

  describe('shape is full', () => {
   it('has full border radius style', () => {
    renderButton('full')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', '999px')
   })
  })

  describe('no shape value is passed', () => {
   it('has no border radius style', () => {
    renderButton('')
    expect(screen.getByText('Button')).toHaveStyleRule('border-radius', '0px')
   })
  })
 })
})