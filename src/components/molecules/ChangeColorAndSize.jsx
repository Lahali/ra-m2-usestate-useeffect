import React from 'react'
import PropTypes from 'prop-types'
import { Label, InputSize, InputColor } from '../atoms'

// Este componente es poco explicito, no se entiende bien que hace
export default function ChangeColorAndSize({
  onChangeColor,
  onChangeSize,
  text,
}) {
  return (
    <>
      <div>
        <Label htmlFor="inputSize">
          {text}
          size
          <InputSize
            id="inputSize"
            name="inputSize"
            onChangeSize={onChangeSize}
          />
        </Label>
      </div>
      <div>
        <Label htmlFor="inputColor">
          {text}
          color
          <InputColor
            id="inputColor"
            name="inputColor"
            onChangeColor={onChangeColor}
          />
        </Label>
      </div>
    </>
  )
}

ChangeColorAndSize.propTypes = {
  onChangeColor: PropTypes.func,
  onChangeSize: PropTypes.func,
  text: PropTypes.string,
}
