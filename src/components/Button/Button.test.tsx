import React from 'react'
import 'jest-styled-components'
import { render, screen } from '@testing-library/react'
import Button from './Button'

const renderButton = (shape = '') => {
 render(<Button label="Button" shape={shape} />)
}
describe('Button', () => {
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