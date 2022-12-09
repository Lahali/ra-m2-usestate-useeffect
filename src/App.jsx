import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dimensions from './components/styles/dimensions'
import Circle from './components/organisms/Circle'
import Square from './components/organisms/Square'
import Triangle from './components/organisms/Triangle'

function App({ fontSize = dimensions.xl }) {
  const [triangleSize, setTriangleSize] = useState(100)
  const [triangleColor, setTriangleColor] = useState('#000000')
  const [circleColor, setCircleColor] = useState('#000000')
  const [circleSize, setCircleSize] = useState(100)
  const [squareColor, setSquareColor] = useState('#000000')
  const [squareSize, setSquareSize] = useState(100)

  useEffect(() => {
    if (triangleSize === squareSize && squareSize === circleSize) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Todas las figuras tienen el mismo tamaño')
    }
    if (triangleColor === squareColor && squareColor === circleColor) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Todas las figuras tienen el mismo color')
    }
  }, [
    triangleColor,
    squareColor,
    circleColor,
    triangleSize,
    squareSize,
    circleSize,
  ])

  return (
    <div className="App">
      <h1 style={{ marginLeft: '2rem', fontSize }}>
        Ejercicio useState y useEffect.
      </h1>
      <Triangle
        triangleSize={triangleSize}
        triangleColor={triangleColor}
        setTriangleColor={setTriangleColor}
        setTriangleSize={setTriangleSize}
      />
      <Circle
        circleColor={circleColor}
        circleSize={circleSize}
        setCircleColor={setCircleColor}
        setCircleSize={setCircleSize}
      />
      <Square
        squareColor={squareColor}
        squareSize={squareSize}
        setSquareColor={setSquareColor}
        setSquareSize={setSquareSize}
      />
    </div>
  )
}

export default App

App.propTypes = {
  fontSize: PropTypes.string,
}
