import React, { useContext } from 'react'
import "./sectionClientes.css"
import ClientesList from './ClienteList'
import { ClientesContext } from '../../context/ClientesContext'

const ClientesListContainer = () => {
  const { clientes } = useContext(ClientesContext)
  
  return (
    <div className="container-clientes mt-4">
        <ClientesList clientes={clientes} />
    </div>
  )
}

export default ClientesListContainer