import React from 'react'

type HeadingProps = {
 type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

const Heading = (type: HeadingProps): JSX.Element => {
 return (
  <h1>Heading</h1>
 )
}

export default Heading