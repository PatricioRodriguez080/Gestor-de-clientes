import React from 'react'
import ClienteDetail from '../ClienteDetailContainer/ClienteDetail'
import NuevoPago from './NuevoPago'

const AgregarPago = ({ id, Nombre, Gmail, UltimoPago, Pagos }) => {
  return (
    <div className="container">
      <ClienteDetail id={id} Nombre={Nombre} Gmail={Gmail} UltimoPago={UltimoPago} Pagos={Pagos} />
      <NuevoPago id={id} UltimoPago={UltimoPago} Pagos={Pagos} />
    </div>

  )
}

export default AgregarPago