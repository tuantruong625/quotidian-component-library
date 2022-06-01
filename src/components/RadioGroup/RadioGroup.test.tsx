import React from 'react'
import { render, screen } from "@testing-library/react"

import RadioGroup, { RadioGroupProps } from "./RadioGroup"

const ITEMS = [
 {
  name: 'radio-group',
  value: 'foo',
  label: 'Foo'
 },
 {
  name: 'radio-group',
  value: 'bar',
  label: 'Bar'
 },
 {
  name: 'radio-group',
  value: 'baz',
  label: 'Baz'
 },
]

const renderComponent = (props = {}) => {
 return (
  render(<RadioGroup items={ITEMS} {...props} />)
 )
}

describe('Radio Group', () => {
 describe('radio group is vertically laid out by default', () => {
  it('radio group wrapper has style rule flex-direction column', () => {
   renderComponent({ alignment: 'vertical' })
   expect(screen.getByTestId('radio-group')).toHaveStyleRule('flex-direction', 'column')
  })
 })

 describe('horizontal radio group', () => {
  it('radio buttons are layed in horizontal layout', () => {
   renderComponent({ alignment: 'horizontal' })
   expect(screen.getByTestId('radio-group')).toHaveStyleRule('flex-direction', 'row')
  })
 })
})