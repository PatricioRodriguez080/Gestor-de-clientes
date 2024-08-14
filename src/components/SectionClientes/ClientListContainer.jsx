import React, { useContext } from 'react'
import "./sectionClientes.css"
import ClientesList from './ClienteList'
import { ClientesContext } from '../../context/ClientesContext'
import SkeletonCliente from '../Skeletons/SkeletonCliente'

const ClientesListContainer = ({ clienteAMostrar, categoriaAMostrar }) => {
  const { clientes, loading } = useContext(ClientesContext)
  
  const ClientesFiltrados = clientes.filter(cliente => 
    cliente.Nombre.toLowerCase().includes(clienteAMostrar.toLowerCase()) && (categoriaAMostrar === '' || cliente.Estado === categoriaAMostrar)
  )

  return (
    <div className="container-clientes mt-4">
        {loading ? <SkeletonCliente /> : <ClientesList clientes={ClientesFiltrados} />}
    </div>
  )
}

export default ClientesListContainer