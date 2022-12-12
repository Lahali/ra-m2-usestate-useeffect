import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber, Label } from '../atoms'

export default function InputNumberGroup({ text, onChangeSize, id }) {
  const type = 'number'
  return (
    <div>
      <Label htmlFor={id}>
        {text}
        color
        <InputNumber type={type} onChange={onChangeSize} id={id} />
      </Label>
    </div>
  )
}
InputNumberGroup.propTypes = {
  text: PropTypes.string,
  onChangeSize: PropTypes.func,
  id: PropTypes.string,
}
