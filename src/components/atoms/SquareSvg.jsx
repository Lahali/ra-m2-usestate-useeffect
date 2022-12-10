import React from 'react'

export default function SquareSvg({ squareColor, squareSize }) {
  return (
    <svg
      style={{ width: { squareSize }, height: { squareSize }, margin: '1rem' }}
    >
      <rect width={squareSize} height={squareSize} fill={squareColor} />
    </svg>
  )
}
