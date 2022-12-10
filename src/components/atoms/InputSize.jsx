import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../styles/dimensions'

// Llamar al handleSize, onChange, sera más facil reusar más adelante
export default function InputSize({
  inputWidth = dimensions.xxxl,
  onChangeSize,
}) {
  return (
    <input
      style={{ width: inputWidth }}
      type="number"
      onChange={onChangeSize}
    />
  )
}

InputSize.propTypes = {
  inputWidth: PropTypes.string,
  onChangeSize: PropTypes.func,
}
