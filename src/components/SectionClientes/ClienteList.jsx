import React from 'react'
import "./sectionClientes.css"
import Cliente from './Cliente'
import ContainerNoEncontrados from './ContainerNoEncontrados'

const ClientesList = ({ clientes }) => {
  return (
    <div className="row row-clientes">
      {clientes.length > 0 ? (
        clientes.map(cliente => (
          <Cliente key={cliente.id} {...cliente} />
        ))
      ) : (
        <ContainerNoEncontrados />
      )}
    </div>
  )
}

export default ClientesList
