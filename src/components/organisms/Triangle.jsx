import React from 'react'
import PropTypes from 'prop-types'
import { TriangleSvg } from '../atoms'
import { InputColorNumber, InputNumberGroup } from '../molecules'

export default function Triangle({
  triangleColor,
  triangleSize,
  setTriangleColor,
  setTriangleSize,
}) {
  const text = 'Triangle '
  const idColor = 'triangleInputColor'
  const idNumber = 'triangleInputNumber'
  return (
    <div style={{ padding: '1rem' }}>
      <InputColorNumber
        text={text}
        onChangeColor={(e) => setTriangleColor(e.target.value)}
        id={idColor}
      />
      <InputNumberGroup
        text={text}
        onChangeSize={(e) => setTriangleSize(Number(e.target.value))}
        id={idNumber}
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
