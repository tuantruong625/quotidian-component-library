import React from 'react'
import { render, screen } from "@testing-library/react"
import Card from './Card';
import { Colors } from '../../utils';

const renderComponent = (props = {}) => {
 return render(<Card {...props} />)
}

describe('Card', () => {
 describe('has a image media passed to component', () => {
  it('renders the image', () => {
   renderComponent({ media: <img src='https://via.placeholder.com/300x200' alt='placeholder' /> })
   expect(screen.getByAltText('placeholder')).toBeInTheDocument()
  })
 })

 describe('has elevated passed to component', () => {
  it('renders the elevated class', () => {
   renderComponent({ elevated: true })
   expect(screen.getByRole('article')).toHaveStyleRule('box-shadow', `2px 4px 8px 0px ${Colors.gray100}`)
  })
 })

 describe('has title passed to component', () => {
  it('renders the title', () => {
   renderComponent({ title: 'Card Component' })
   expect(screen.getByText('Card Component')).toBeInTheDocument()
  })
 })

 describe('has body passed to component', () => {
  it('renders the body', () => {
   renderComponent({ body: 'This is a card component' })
   expect(screen.getByText('This is a card component')).toBeInTheDocument()
  })
 })

 describe('has caption passed to component', () => {
  it('renders the caption', () => {
   renderComponent({ caption: 'This is a caption' })
   expect(screen.getByText('This is a caption')).toBeInTheDocument()
  })
 })
});