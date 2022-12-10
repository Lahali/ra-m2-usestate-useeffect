import React from 'react'
import PropTypes from 'prop-types'

// Para hacerlo más legible llamar a handleColor, onChange
export default function InputColor({ onChangeColor }) {
  return <input type="color" onChange={onChangeColor} />
}

InputColor.propTypes = {
  onChangeColor: PropTypes.func,
}
