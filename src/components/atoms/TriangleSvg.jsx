import React from 'react'
import PropTypes from 'prop-types'

export default function TriangleSvg({ triangleSize, triangleColor }) {
  return (
    <svg
      style={{
        width: `${triangleSize * 1.5}`,
        height: { triangleSize },
        margin: '1rem',
      }}
    >
      <polygon
        fill={triangleColor}
        points={`0 ${triangleSize}, ${triangleSize / 1.3} 0, ${
          triangleSize * 1.5
        } ${triangleSize}`}
      />
    </svg>
  )
}

TriangleSvg.propTypes = {
  triangleSize: PropTypes.number,
  triangleColor: PropTypes.string,
}
