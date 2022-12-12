import React from 'react'
import PropTypes from 'prop-types'

export default function SquareSvg({ squareColor, squareSize }) {
  return (
    <svg
      style={{
        width: `${squareSize}`,
        height: `${squareSize}`,
        margin: '1rem',
      }}
    >
      <rect width={squareSize} height={squareSize} fill={squareColor} />
    </svg>
  )
}

SquareSvg.propTypes = {
  squareColor: PropTypes.string,
  squareSize: PropTypes.number,
}
