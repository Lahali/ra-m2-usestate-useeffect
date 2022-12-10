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
      {/* En lugar de css utilizaria SVG y crearia componentes a nivel de atoms para cada forma.
      En este nivel combinarlos para conseguir la funcionalidad que quieres */}
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
