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
      {/* En lugar de css utilizaria SVG y crearia componentes a nivel de atoms para cada forma. En este nivel combinarlos para conseguir la funcionalidad que quieres */}
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
