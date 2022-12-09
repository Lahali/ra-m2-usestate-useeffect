import React from 'react'
import PropTypes from 'prop-types'
import ActionFields from '../molecules/ActionFields'

export default function Circle({
  circleColor,
  circleSize,
  setCircleColor,
  setCircleSize,
}) {
  const text = 'Circle '
  return (
    <div style={{ padding: '2rem' }}>
      <ActionFields
        text={text}
        handleColor={(e) => setCircleColor(e.target.value)}
        handleSize={(e) => setCircleSize(Number(e.target.value))}
      />
      <div
        style={{
          margin: '1rem',
          borderRadius: '50%',
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          backgroundColor: `${circleColor}`,
        }}
      />
    </div>
  )
}

Circle.propTypes = {
  circleColor: PropTypes.string,
  circleSize: PropTypes.number,
  setCircleColor: PropTypes.func,
  setCircleSize: PropTypes.func,
}
