import React from 'react'
import ClienteDetail from '../ClienteDetailContainer/ClienteDetail'
import NuevoPago from './NuevoPago'

const AgregarPago = ({ id, Nombre, Gmail, UltimoPago, Pagos }) => {
  return (
    <div className="container-agregar-pago">
      <h2 className="mb-5">Agregar un nuevo pago</h2>
      <ClienteDetail id={id} Nombre={Nombre} Gmail={Gmail} UltimoPago={UltimoPago} Pagos={Pagos} />
      <NuevoPago id={id} />
    </div>

  )
}

export default AgregarPago