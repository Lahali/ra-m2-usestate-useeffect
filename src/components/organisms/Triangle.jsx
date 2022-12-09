import React from 'react'
import PropTypes from 'prop-types'
import ActionFields from '../molecules/ActionFields'

export default function Triangle({
  triangleColor,
  triangleSize,
  setTriangleColor,
  setTriangleSize,
}) {
  const text = 'Triangle '

  return (
    <div style={{ padding: '2rem' }}>
      <ActionFields
        text={text}
        handleColor={(e) => setTriangleColor(e.target.value)}
        handleSize={(e) => setTriangleSize(Number(e.target.value))}
      />
      <div
        style={{
          margin: '1rem',
          width: '0',
          height: '0',
          borderLeft: `${triangleSize}px solid transparent`,
          borderRight: `${triangleSize}px solid transparent`,
          borderBottom: `${triangleSize * 1.5}px solid ${triangleColor}`,
        }}
      />
    </div>
  )
}

Triangle.propTypes = {
  triangleColor: PropTypes.string,
  triangleSize: PropTypes.number,
  setTriangleColor: PropTypes.func,
  setTriangleSize: PropTypes.func,
}
