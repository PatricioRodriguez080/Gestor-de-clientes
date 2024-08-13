import React, { useState } from 'react'
import BotonAgregarCliente from './BotonAgregarCliente'
import ClientesListContainer from './ClientListContainer'
import BuscadorDeCliente from './BuscadorDeCliente'

const SectionClientes = () => {
  const [clienteAMostrar, setClienteAMostrar] = useState("")

  return (
    <section className="section-clientes">
      <div className="container-agregar-buscador d-flex">
        <BotonAgregarCliente />
        <BuscadorDeCliente setClienteAMostrar={setClienteAMostrar} />
      </div>
      <ClientesListContainer clienteAMostrar={clienteAMostrar} />
    </section>
  )
}

export default SectionClientes