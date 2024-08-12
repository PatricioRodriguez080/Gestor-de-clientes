import React from 'react'
import { Link } from 'react-router-dom'

const BotonAgregarCliente = () => {
  return (
    <Link to={"/agregar-cliente"}>
      <button className="btn btn-agregar-cliente text-light">Agregar cliente</button>
    </Link>
  )
}

export default BotonAgregarCliente