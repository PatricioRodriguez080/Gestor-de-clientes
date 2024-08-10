import React from 'react'
import "./sectionClientes.css"
import Cliente from './Cliente'

const ClientesList = ({clientes}) => {
  return (
    <div className="row row-clientes">
      {clientes.map(cliente => (
        <Cliente key={cliente.id} {...cliente} />
      ))}
    </div>
  )
}

export default ClientesList