import React from 'react'
import { render, screen } from "@testing-library/react"
import CheckboxGroup from "./CheckboxGroup"

describe('CheckboxGroup', () => {
 const items = [
  {
   name: 'Foo',
   value: 'Foo',
   label: 'Foo'
  },
  {
   name: 'Foo',
   value: 'Baz',
   label: 'Baz'
  },
  {
   name: 'Foo',
   value: 'Bar',
   label: 'Bar'
  },
 ]

 const renderComponent = (props = {}) => {
  return render(<CheckboxGroup items={items}{...props} />)
 }

 describe('group alignment', () => {
  describe('alignment is horizontal ', () => {
   it('returns row style property', () => {
    renderComponent()

    expect(screen.getByTestId('checkbox-group')).toHaveStyleRule('flex-direction', 'row')
   })
  })

  describe('alignment is vertical ', () => {
   it('returns column style property', () => {
    renderComponent({ alignment: 'vertical' })

    expect(screen.getByTestId('checkbox-group')).toHaveStyleRule('flex-direction', 'column')
   })
  })
 })
})