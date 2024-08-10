import React from 'react'
import "./inicio.css"

const Inicio = () => {
  return (
    <>
      <h1 className="text-center mt-4">Bienvenido!</h1>
      <div className="container-inicio">
        <div className="container-datos bg-primary">
          <p>dato1</p>
        </div>
        <div className="container-datos bg-primary">
          <p>dato2</p>
        </div>
        <div className="container-datos bg-primary">
          <p>dato3</p>
        </div>
      </div>
    </>
  )
}

export default Inicio