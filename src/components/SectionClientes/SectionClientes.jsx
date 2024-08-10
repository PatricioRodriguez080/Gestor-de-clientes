import React from 'react'
import BotonAgregarCliente from './BotonAgregarCliente'
import ClientesListContainer from './ClientListContainer'

const SectionClientes = () => {
  return (
    <section className="section-clientes">
      <BotonAgregarCliente />
      <ClientesListContainer />
    </section>
  )
}

export default SectionClientes