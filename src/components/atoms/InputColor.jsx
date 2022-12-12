import React from 'react'
import PropTypes from 'prop-types'

export default function InputColor({ onChangeColor }) {
  return <input type="color" onChange={onChangeColor} />
}

InputColor.propTypes = {
  onChangeColor: PropTypes.func,
}
