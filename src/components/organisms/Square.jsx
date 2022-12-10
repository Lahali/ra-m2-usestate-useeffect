import React from 'react'
import PropTypes from 'prop-types'
import ActionFields from '../molecules/ChangeColorAndSize'

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
      <div
        style={{
          margin: '1rem',
          width: `${squareSize}px`,
          height: `${squareSize}px`,
          backgroundColor: `${squareColor}`,
        }}
      />
    </div>
  )
}

Square.propTypes = {
  squareColor: PropTypes.string,
  squareSize: PropTypes.number,
  setSquareColor: PropTypes.func,
  setSquareSize: PropTypes.func,
}
