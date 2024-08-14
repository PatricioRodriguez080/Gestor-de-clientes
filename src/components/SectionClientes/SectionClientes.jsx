import React, { useState } from 'react'
import BotonAgregarCliente from './BotonAgregarCliente'
import ClientesListContainer from './ClientListContainer'
import BuscadorDeCliente from './BuscadorDeCliente'
import DropwdownCategoria from './DropwdownCategoria'

const SectionClientes = () => {
  const [clienteAMostrar, setClienteAMostrar] = useState("")
  const [categoriaAMostrar, setCategoriaAMostrar] = useState("")

  return (
    <section className="section-clientes">
      <div className="container-agregar-buscador d-flex">
        <BotonAgregarCliente />
        <DropwdownCategoria setCategoriaAMostrar={setCategoriaAMostrar} />
        <BuscadorDeCliente setClienteAMostrar={setClienteAMostrar} />
      </div>
      <ClientesListContainer clienteAMostrar={clienteAMostrar} categoriaAMostrar={categoriaAMostrar} />
    </section>
  )
}

export default SectionClientes