import React from 'react'
import PropTypes from 'prop-types'
import ChangeColorAndSize from '../molecules/ChangeColorAndSize'
import { TriangleSvg } from '../atoms'

export default function Triangle({
  triangleColor,
  triangleSize,
  setTriangleColor,
  setTriangleSize,
}) {
  const text = 'Triangle '

  return (
    <div style={{ padding: '1rem' }}>
      <ChangeColorAndSize
        text={text}
        onChangeColor={(e) => setTriangleColor(e.target.value)}
        onChangeSize={(e) => setTriangleSize(Number(e.target.value))}
      />
      <TriangleSvg triangleSize={triangleSize} triangleColor={triangleColor} />
    </div>
  )
}

Triangle.propTypes = {
  triangleColor: PropTypes.string,
  triangleSize: PropTypes.number,
  setTriangleColor: PropTypes.func,
  setTriangleSize: PropTypes.func,
}
