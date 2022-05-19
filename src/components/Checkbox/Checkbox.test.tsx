import React from "react"
import { render, screen } from "@testing-library/react"

import Checkbox from "./Checkbox"

describe('Checkbox', () => {
 describe('when checkmarkIcon is true', () => {
  it('return clippath attributes', () => {
   render(<Checkbox label="Quotidian checkbox" checkmarkIcon={true} />)
   expect(screen.getByRole('checkbox')).toHaveStyleRule('clip-path')
  })
 })

 describe('when checkmarkIcon is false', () => {
  it('return clippath attributes', () => {
   render(<Checkbox label="Quotidian checkbox" />)
   expect(screen.getByRole('checkbox')).not.toHaveStyleRule('clip-path')
  })
 })
})