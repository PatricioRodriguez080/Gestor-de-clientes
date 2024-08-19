import React from 'react'

const Pago = ({ Nombre, Pagos }) => {
  return (
    <>
      {Pagos.map((pago, index) => (
        <tr key={index}>
          <td>{Nombre}</td>
          <td>{pago.Fecha}</td>
          <td>{`$${pago.Monto}`}</td>
        </tr>
      ))}
    </>
  )
}

export default Pago