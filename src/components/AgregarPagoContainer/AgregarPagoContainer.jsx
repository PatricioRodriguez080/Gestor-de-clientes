import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getClienteDetail } from '../../services/clientService'
import SkeletonPagosCliente from '../Skeletons/SkeletonPagosCliente'
import AgregarPago from './AgregarPago'

const AgregarPagoContainer = () => {
  const { idCliente } = useParams()
  const [clienteAMostrar, setClienteAMostrar] = useState()
  const [loadingClientePagos, setLoadingClientePagos] = useState(true)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const cliente = await getClienteDetail(idCliente)
        setClienteAMostrar(cliente)
        setLoadingClientePagos(false)
      } catch (error) {
        console.log("Error al traer detalles", error)
      }
    }

    fetchdata()
  }, [idCliente])


  return (
    <div className="container">
      {loadingClientePagos ? (
        <SkeletonPagosCliente />
      ) : (
        <AgregarPago {...clienteAMostrar} />
      )}
    </div>
  )
}

export default AgregarPagoContainer