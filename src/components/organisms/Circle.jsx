import React from 'react'
import PropTypes from 'prop-types'
import { CircleSvg } from '../atoms'
import { InputColorNumber, InputNumberGroup } from '../molecules'

export default function Circle({
  circleColor,
  circleSize,
  setCircleColor,
  setCircleSize,
}) {
  const text = 'Circle '
  const idColor = 'circleInputColor'
  const idNumber = 'circleInputNumber'

  return (
    <div style={{ padding: '2rem' }}>
      <InputColorNumber
        text={text}
        onChangeColor={(e) => setCircleColor(e.target.value)}
        id={idColor}
      />
      <InputNumberGroup
        text={text}
        onChangeSize={(e) => setCircleSize(Number(e.target.value))}
        id={idNumber}
      />
      <CircleSvg circleColor={circleColor} circleSize={circleSize} />
    </div>
  )
}

Circle.propTypes = {
  circleColor: PropTypes.string,
  circleSize: PropTypes.number,
  setCircleColor: PropTypes.func,
  setCircleSize: PropTypes.func,
}
