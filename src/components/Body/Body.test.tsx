import React from "react"
import { render, screen } from "@testing-library/react"
import Body from "./Body"
import { Spacing } from "../../utils"

const BODY_TEXT = "this a body component"
const renderComponent = ({ ...props }) => {
 return (
  render(<Body {...props} >{BODY_TEXT}</Body>)
 )
}

describe('Body', () => {
 describe('isUppercase is set to true', () => {
  it('uppercase styles are applied', () => {
   renderComponent({ isUppercase: true })
   expect(screen.getByText(BODY_TEXT)).toHaveStyleRule('text-transform', 'uppercase')
   expect(screen.getByText(BODY_TEXT)).toHaveStyleRule('letter-spacing', `${Spacing.size1}`)
  })
 })

 describe('isCapitalized is set to true', () => {
  it('Capitalized styles are applied', () => {
   renderComponent({ isCapitalized: true })
   expect(screen.getByText(BODY_TEXT)).toHaveStyleRule('text-transform', 'capitalize', {
    modifier: '::first-letter'
   })
  })
 })
})