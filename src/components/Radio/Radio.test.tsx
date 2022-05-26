import React from 'react'
import { render, screen } from "@testing-library/react"
import Radio from "./Radio"

describe('Radio', () => {
 const RADIO_LABEL = 'Radio label'
 it('sets label when passed', () => {
  render(<Radio label={RADIO_LABEL} />)
  expect(screen.getByRole('radio', { name: RADIO_LABEL })).toBeInTheDocument()
 })
})