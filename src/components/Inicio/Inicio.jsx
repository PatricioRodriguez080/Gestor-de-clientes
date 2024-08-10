import React, { useContext } from 'react'
import "./inicio.css"
import { ClientesContext } from '../../context/ClientesContext'

const Inicio = () => {
  const { cantClientes } = useContext(ClientesContext)

  return (
    <>
      <h1 className="text-center mt-4">Bienvenido!</h1>
      <div className="container-inicio">
        <div className="container-datos">
          <h2 className="text-center mb-4">Clientes</h2>
          <h3 className="text-center">{cantClientes}</h3>
        </div>
        <div className="container-datos">
          <h2 className="text-center mb-4">Gnancia</h2>
          <h3 className="text-center">$40.980</h3>
        </div>
        <div className="container-datos">
          <h2 className="text-center mb-4">dato3</h2>
          <h3 className="text-center">dato3</h3>
        </div>
      </div>
    </>
  )
}

export default Inicio