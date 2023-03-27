import React from 'react'

//rafce

const onClick = () => {
    alert("Hola")
}

const gameCircle = () => {
  return (
    <div onClick={onClick}>
      <h1>Soy un circulo</h1>
    </div>
  )
}

export default gameCircle

