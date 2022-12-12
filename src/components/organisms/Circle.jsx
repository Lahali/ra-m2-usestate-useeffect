import React from 'react'
import PropTypes from 'prop-types'
import ChangeColorAndSize from '../molecules/ChangeColorAndSize'
import { CircleSvg } from '../atoms'

export default function Circle({
  circleColor,
  circleSize,
  setCircleColor,
  setCircleSize,
}) {
  const text = 'Circle '
  return (
    <div style={{ padding: '2rem' }}>
      <ChangeColorAndSize
        text={text}
        onChangeColor={(e) => setCircleColor(e.target.value)}
        onChangeSize={(e) => setCircleSize(Number(e.target.value))}
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
