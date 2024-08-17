import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getClienteDetail } from '../../services/clientService'
import EditarCliente from './EditarCliente'

const EditarClienteContainer = () => {
  const { idCliente } = useParams()
  const [clienteAMostrar, setClienteAMostrar] = useState()
  const [loadingClienteInfo, setLoadingClienteInfo] = useState(true)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const cliente = await getClienteDetail(idCliente)
        setClienteAMostrar(cliente)
        setLoadingClienteInfo(false)
      } catch (error) {
        console.log("Error al traer detalles", error)
      }
    }

    fetchdata()
  }, [idCliente])

  return (
    <div className="container-editar-cliente">
      {loadingClienteInfo ? (
        <h1>cargando</h1>
      ) : (
        <EditarCliente {...clienteAMostrar} />
      )}
    </div>
  )
}

export default EditarClienteContainer