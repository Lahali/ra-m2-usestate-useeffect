import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../styles/dimensions'

export default function Span({ children, fontSize = dimensions.font.base }) {
  return <span style={{ fontSize }}>{children}</span>
}

Span.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
}
