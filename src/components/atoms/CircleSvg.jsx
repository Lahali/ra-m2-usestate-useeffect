import React from 'react'
import PropTypes from 'prop-types'

export default function CircleSvg({ circleColor, circleSize }) {
  return (
    <svg
      style={{
        width: `${circleSize * 2}`,
        heigth: `${circleSize * 2}`,
        margin: '1rem',
      }}
    >
      <circle
        cx={circleSize}
        cy={circleSize}
        r={circleSize}
        fill={circleColor}
      />
    </svg>
  )
}

CircleSvg.propTypes = {
  circleColor: PropTypes.string,
  circleSize: PropTypes.number,
}
