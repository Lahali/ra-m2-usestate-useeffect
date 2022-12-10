import React from 'react'
import PropTypes from 'prop-types'
import InputColor from '../atoms/InputColor'
import InputSize from '../atoms/InputSize'
import Span from '../atoms/Span'

// Este componente es poco explicito, no se entiende bien que hace
export default function ChangeColorAndSize({
  onChangeColor,
  onChangeSize,
  text,
}) {
  return (
    <>
      <div>
        {/* Un input debería de tener un label asociado */}
        <Span>
          {text}
          size
        </Span>
        {/* Le falta id, name y mejor que handleSize, onChange */}
        <InputSize onChangeSize={onChangeSize} />
      </div>
      <div>
        <Span>
          {text}
          color
        </Span>
        <InputColor onChangeColor={onChangeColor} />
      </div>
    </>
  )
}

ChangeColorAndSize.propTypes = {
  onChangeColor: PropTypes.func,
  onChangeSize: PropTypes.func,
  text: PropTypes.string,
}
