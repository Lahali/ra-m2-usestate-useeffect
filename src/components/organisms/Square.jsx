import React from 'react'
import PropTypes from 'prop-types'
import { SquareSvg } from '../atoms'
import { InputColorNumber, InputNumberGroup } from '../molecules'

export default function Square({
  squareColor,
  squareSize,
  setSquareColor,
  setSquareSize,
}) {
  const text = 'Square '
  const idColor = 'squareInputColor'
  const idNumber = 'squareInputNumber'
  return (
    <div style={{ padding: '2rem' }}>
      <InputColorNumber
        text={text}
        onChangeColor={(e) => setSquareColor(e.target.value)}
        id={idColor}
      />
      <InputNumberGroup
        text={text}
        onChangeSize={(e) => setSquareSize(Number(e.target.value))}
        id={idNumber}
      />
      <SquareSvg squareColor={squareColor} squareSize={squareSize} />
    </div>
  )
}

Square.propTypes = {
  squareColor: PropTypes.string,
  squareSize: PropTypes.number,
  setSquareColor: PropTypes.func,
  setSquareSize: PropTypes.func,
}
