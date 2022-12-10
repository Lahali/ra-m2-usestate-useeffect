import React from 'react'
import PropTypes from 'prop-types'
import InputColor from '../atoms/InputColor'
import InputSize from '../atoms/InputSize'
import Span from '../atoms/Span'

// Este componente es poco explicito, no se entiende bien que hace
export default function ActionFields({ handleColor, handleSize, text }) {
  return (
    <>
      <div>
        {/* Un input debería de tener un label asociado */}
        <Span>
          {text}
          size
        </Span>
        {/* Le falta id, name y mejor que handleSize, onChange */}
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
