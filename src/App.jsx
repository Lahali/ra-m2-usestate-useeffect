import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dimensions from './components/styles/dimensions'
import { Circle, Square, Triangle } from './components/organisms'

function App({ fontSize = dimensions.xl }) {
  const [triangleSize, setTriangleSize] = useState(50)
  const [triangleColor, setTriangleColor] = useState('#C70039')
  const [circleColor, setCircleColor] = useState('#FFC300')
  const [circleSize, setCircleSize] = useState(75)
  const [squareColor, setSquareColor] = useState('#808B96')
  const [squareSize, setSquareSize] = useState(100)

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
