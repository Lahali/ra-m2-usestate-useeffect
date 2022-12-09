import React from 'react'
import PropTypes from 'prop-types'
import InputColor from '../atoms/InputColor'
import InputSize from '../atoms/InputSize'
import Span from '../atoms/Span'

export default function ActionFields({ handleColor, handleSize, text }) {
  return (
    <>
      <div>
        <Span>
          {text}
          size
        </Span>
        <InputSize handleSize={handleSize} />
      </div>
      <div>
        <Span>
          {text}
          color
        </Span>
        <InputColor handleColor={handleColor} />
      </div>
    </>
  )
}

ActionFields.propTypes = {
  handleColor: PropTypes.func,
  handleSize: PropTypes.func,
  text: PropTypes.string,
}
