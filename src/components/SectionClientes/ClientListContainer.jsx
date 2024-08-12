import React, { useContext } from 'react'
import "./sectionClientes.css"
import ClientesList from './ClienteList'
import { ClientesContext } from '../../context/ClientesContext'
import SkeletonCliente from '../Skeletons/SkeletonCliente'

const ClientesListContainer = () => {
  const { clientes, loading } = useContext(ClientesContext)
  
  return (
    <div className="container-clientes mt-4">
        {loading ? <SkeletonCliente /> : <ClientesList clientes={clientes} />}
    </div>
  )
}

export default ClientesListContainer