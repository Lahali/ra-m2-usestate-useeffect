import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../styles/dimensions'

// Llama este componente InputNumber, sera más fácil de usar en el futuro.
export default function InputNumber({
  inputWidth = dimensions.xxxl,
  onChange,
  type,
  id,
}) {
  return (
    <input
      style={{ width: inputWidth }}
      type={type}
      id={id}
      name={id}
      onChange={onChange}
    />
  )
}

InputNumber.propTypes = {
  inputWidth: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.string,
}
