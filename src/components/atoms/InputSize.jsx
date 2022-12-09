import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../styles/dimensions'

// Llamar al handleSize, onChange, sera más facil reusar más adelante
export default function InputSize({
  inputWidth = dimensions.xxxl,
  handleSize,
}) {
  return (
    <input style={{ width: inputWidth }} type="number" onChange={handleSize} />
  )
}

InputSize.propTypes = {
  inputWidth: PropTypes.string,
  handleSize: PropTypes.func,
}
