import React, { useState } from 'react'
import { DateTime } from 'luxon'
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { AgregarPagoFS } from "../../services/clientService"
import Swal from 'sweetalert2'

const NuevoPago = ({ id, UltimoPago, Pagos }) => {
  const [monto, setMonto] = useState("")
  const [selectedDate, setSelectedDate] = useState(null)
  const [fechaPago, setFechaPago] = useState("")

  const handleSelectDate = (date) => {
    setSelectedDate(date)
    const formattedDate = date ? DateTime.fromJSDate(date).toFormat('dd/MM/yyyy') : ''
    setFechaPago(formattedDate)
  }

  const agregarPago = async () => {
    const montoNumerico = Number(monto)

    const fechaPagoDate = DateTime.fromFormat(fechaPago, 'dd/MM/yyyy')
    const fechaProximoPago = fechaPagoDate.plus({ months: 1 })
    const diasRestantes = Math.ceil(fechaProximoPago.diffNow('days').days)
    const estadoCliente = diasRestantes >= 0 ? "Al día" : "Adeuda"

    const nuevoPago = {
      Fecha: fechaPagoDate.toFormat('dd/MM/yyyy'),
      Monto: montoNumerico
    }

    try {
      await AgregarPagoFS(id, nuevoPago, fechaPagoDate.toFormat('dd/MM/yyyy'), diasRestantes, estadoCliente)
      Swal.fire({
        title: "Pago agregado!",
        text: "El pago se ha registrado exitosamente.",
        icon: "success",
        confirmButtonText: "OK"
      })

      setMonto("")
      setSelectedDate(null)
      setFechaPago("")
    } catch (error) {
      console.log("Error al agregar pago", error)
    }
  }

  return (
    <div className="container">
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingMonto"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        <label htmlFor="floatingMonto">Monto</label>
      </div>

      <div className="form-floating mt-4">
        <h2>Fecha de pago</h2>
        <div className="day-picker-container">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelectDate}
          />
        </div>
        <p className="text-muted mt-2">
          {fechaPago || "Seleccionar día."}
        </p>
      </div>

      <button className="btn btn-agregar-pago text-light mt-3" onClick={agregarPago}>Agregar Pago</button>
    </div>
  )
}

export default NuevoPago