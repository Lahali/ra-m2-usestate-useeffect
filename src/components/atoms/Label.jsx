import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../styles/dimensions'

export default function Label({
  children,
  fontSize = dimensions.font.base,
  htmlFor,
}) {
  return (
    <label style={{ fontSize }} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  htmlFor: PropTypes.string,
}
