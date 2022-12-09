import React from 'react'
import PropTypes from 'prop-types'

export default function InputColor({ handleColor }) {
  return <input type="color" onChange={handleColor} />
}

InputColor.propTypes = {
  handleColor: PropTypes.func,
}
