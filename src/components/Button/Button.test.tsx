import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
 it('renders the Button component', () => {
  render(<Button label='Hello Button' />)
 })
})