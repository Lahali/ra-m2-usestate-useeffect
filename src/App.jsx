import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dimensions from './components/styles/dimensions'
import Circle from './components/organisms/Circle'
import Square from './components/organisms/Square'
import Triangle from './components/organisms/Triangle'

function App({ fontSize = dimensions.xl }) {
  // Dejar colores y tamaños distintos por defecto, sino,
  // no puedo ni llegar a ver el fronto por los alerts
  const [triangleSize, setTriangleSize] = useState(50)
  const [triangleColor, setTriangleColor] = useState('#C70039')
  const [circleColor, setCircleColor] = useState('#FFC300')
  const [circleSize, setCircleSize] = useState(75)
  const [squareColor, setSquareColor] = useState('#808B96')
  const [squareSize, setSquareSize] = useState(100)

  // Lo pondría en dos useEffect separados
  useEffect(() => {
    if (triangleColor === squareColor && squareColor === circleColor) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Todas las figuras tienen el mismo color')
    }
  }, [triangleColor, squareColor, circleColor])

  useEffect(() => {
    if (triangleSize === squareSize && squareSize === circleSize) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Todas las figuras tienen el mismo tamaño')
    }
  }, [triangleSize, squareSize, circleSize])

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
