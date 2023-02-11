import React from "react"
import { render, screen } from "@testing-library/react"
import Flex from "./Flex"

describe('Flex', () => {
 describe('handles flex directions', () => {
  it.each(['row', 'row-reverse', 'column', 'colum-reverse'])('flex container has %p direction', (direction) => {
   render(<Flex direction={direction}><p>1</p><p>2</p></Flex>)
   expect(screen.getByTestId('flex-container')).toHaveStyleRule('flex-direction', direction)
  })
 })

 describe('handles justify-content', () => {
  it.each(['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'])('flex container has justify-content %p', (justifyContent) => {
   render(<Flex direction='row' justify={justifyContent}><p>1</p><p>2</p></Flex>)
   expect(screen.getByTestId('flex-container')).toHaveStyleRule('justify-content', justifyContent)
  })
 })
 describe('handles align-items', () => {
  it.each(['center', 'start', 'end', 'flex-start', 'flex-end'])('flex container has align-items %p', (alignItems) => {
   render(<Flex direction='row' alignItems={alignItems}><p>1</p><p>2</p></Flex>)
   expect(screen.getByTestId('flex-container')).toHaveStyle({ 'align-items': alignItems })
  })
})

describe('handles flexwrap', () => {
  it.each(['wrap', 'nowrap', 'wrap-reverse'])('flex container has flexwrap %p', (flexWrapProps) => {
    render(<Flex direction='row' flexWrap={flexWrapProps}><p>1</p><p>2</p></Flex>)
    })
  })
})