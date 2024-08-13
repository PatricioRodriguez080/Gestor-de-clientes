import { useState } from "react"
import "./agregarCliente.css"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { postCliente } from "../../services/clientService"
import Swal from 'sweetalert2'
import { DateTime } from 'luxon'

const AgregarCliente = () => {
  const [selected, setSelected] = useState(null)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [monto, setMonto] = useState("")
  const [fechaUltimoPago, setFechaUltimoPago] = useState("")

  const handleSelectDate = (date) => {
    setSelected(date)
    const formattedDate = date ? DateTime.fromJSDate(date).toFormat('dd/MM/yyyy') : ''
    setFechaUltimoPago(formattedDate)
  }

  const generarCliente = async () => {
    const montoNumerico = parseFloat(monto)

    const fechaUltimoPagoDate = DateTime.fromFormat(fechaUltimoPago, 'dd/MM/yyyy')
    const fechaProximoPago = fechaUltimoPagoDate.plus({ months: 1 })
    const diasRestantes = Math.ceil(fechaProximoPago.diffNow('days').days)
    const EstadoCliente = diasRestantes >= 0 ? "Al día" : "Adeuda"

    const cliente = {
      Nombre: nombre,
      Gmail: email,
      UltimoPago: fechaUltimoPagoDate.toFormat('dd/MM/yyyy'),
      DiasRestantes: diasRestantes,
      Pagos: [{ Fecha: fechaUltimoPagoDate.toFormat('dd/MM/yyyy'), Monto: montoNumerico }],
      Estado: EstadoCliente
    }

    try {
      const resultadoId = await postCliente(cliente)
      Swal.fire({
        title: "Cliente generado!",
        text: `ID del documento: ${resultadoId}`,
        icon: "success",
        confirmButtonText: "OK"
      })

      setNombre("")
      setEmail("")
      setFechaUltimoPago("")
      setMonto("")
      setSelected(null)
    } catch (error) {
      console.error("Error al generar el cliente:", error)
      Swal.fire({
        title: "Error!",
        text: "Hubo un problema al generar el cliente",
        icon: "error",
        confirmButtonText: "OK"
      })
    }
  }

  return (
    <div className="container">
      <h2>Informacion personal</h2>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingName"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="floatingName">Nombre</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingEmail">Email address</label>
      </div>
      <div className="form-floating mt-4">
        <h2>Fecha de pago</h2>
        <div className="day-picker-container">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleSelectDate}
          />
        </div>
        <p className="text-muted mt-2">
          {fechaUltimoPago || "Seleccionar día."}
        </p>
      </div>
      <div className="container-monto">
        <h2>Informacion del pago</h2>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingMonto"
            placeholder="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
          <label htmlFor="floatingMonto">Monto</label>
        </div>
      </div>
      <button className="btn btn-generar-cliente text-light mt-3" onClick={generarCliente}>Generar Cliente</button>
    </div>
  )
}

export default AgregarCliente