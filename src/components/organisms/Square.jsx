import React from 'react'
import PropTypes from 'prop-types'
import ActionFields from '../molecules/ChangeColorAndSize'
import SquareSvg from '../atoms/SquareSvg'

export default function Square({
  squareColor,
  squareSize,
  setSquareColor,
  setSquareSize,
}) {
  const text = 'Square '

  return (
    <div style={{ padding: '2rem' }}>
      <ActionFields
        text={text}
        onChangeColor={(e) => setSquareColor(e.target.value)}
        onChangeSize={(e) => setSquareSize(Number(e.target.value))}
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
