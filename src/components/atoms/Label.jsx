import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../styles/dimensions'

export default function Label({ children, fontSize = dimensions.font.base }) {
  return <label style={{ fontSize }}>{children}</label>
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
}
