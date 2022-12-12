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
            // Si renderizas 3 moleculas con inputSize lso labels de cada uno van a tener el mismo id, y solo puede haber un elemento con ese id en el DOM
            id="inputSize"
            name="inputSize"
            onChangeSize={onChangeSize}
          />
        </Label>
      </div>
      <div>
        {/* Te recomiendo crear dos componentes en molecules: InputNumberGroup y InputColorNumber. Ambos contienen Label + InputNumber */}
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
