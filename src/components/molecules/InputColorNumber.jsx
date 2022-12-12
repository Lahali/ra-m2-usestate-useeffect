import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber, Label } from '../atoms'

export default function InputColorNumber({ text, onChangeColor, id }) {
  const type = 'color'
  return (
    <div>
      <Label htmlFor={id}>
        {text}
        color
        <InputNumber type={type} onChange={onChangeColor} id={id} />
      </Label>
    </div>
  )
}

InputColorNumber.propTypes = {
  text: PropTypes.string,
  onChangeColor: PropTypes.func,
  id: PropTypes.string,
}
