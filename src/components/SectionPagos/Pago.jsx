import React, { useState } from 'react'
import './pago.css'
import { actualizarPagoFS } from '../../services/clientService'

const Pago = ({ Nombre, Pagos, idCliente }) => {
  const [editablePagoIndex, setEditablePagoIndex] = useState(null)
  const [editedMonto, setEditedMonto] = useState('')

  const handleEditClick = (index, monto) => {
    setEditablePagoIndex(index)
    setEditedMonto(monto)
  }

  const handleMontoChange = (e) => {
    setEditedMonto(e.target.value)
  }

  const handleSaveClick = async (index) => {
    try {
      const pagoActualizado = {
        ...Pagos[index],
        Monto: parseFloat(editedMonto)
      }

      await actualizarPagoFS(idCliente, pagoActualizado, index)

      setEditablePagoIndex(null)
      setEditedMonto('')
    } catch (error) {
      console.error("Error al guardar el pago", error)
    }
  }

  return (
    <>
      {Pagos.map((pago, index) => (
        <tr key={index}>
          <td>{Nombre}</td>
          <td>{pago.Fecha}</td>
          <td>
            {editablePagoIndex === index ? (
              <div className="editar-monto-container">
                <span>$</span>
                <input
                  type="number"
                  value={editedMonto}
                  onChange={handleMontoChange}
                />
                <i className="fa-solid fa-check fa-2x" onClick={() => handleSaveClick(index)}></i>
              </div>
            ) : (
              <div className="monto-icono-container">
                {`$${pago.Monto}`}
                <i className="fa-solid fa-pen-to-square fa-2x" onClick={() => handleEditClick(index, pago.Monto)}></i>
              </div>
            )}
          </td>
        </tr>
      ))}
    </>
  )
}

export default Pago