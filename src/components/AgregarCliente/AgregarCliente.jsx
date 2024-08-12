import { useState } from "react"
import "./agregarCliente.css"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { postCliente } from "../../services/clientService"
import Swal from 'sweetalert2'

const AgregarCliente = () => {
  const [selected, setSelected] = useState(null)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [monto, setMonto] = useState("")
  const [fechaUltimoPago, setFechaUltimoPago] = useState("")

  const handleSelectDate = (date) => {
    setSelected(date)
    const formattedDate = date
      ? date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
      : ''
    setFechaUltimoPago(formattedDate)
  }

  const generarCliente = async () => {
    const cliente = {
      Nombre: nombre,
      Gmail: email,
      UltimoPago: fechaUltimoPago,
      Pagos: [{Fecha: fechaUltimoPago, Monto: monto}]
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
        <h2>Monto</h2>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingEmail"
            placeholder="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
          <label htmlFor="floatingEmail">Monto</label>
        </div>
      </div>
      <button className="btn btn-generar-cliente text-light mt-3" onClick={generarCliente}>Generar Cliente</button>
    </div>
  )
}

export default AgregarCliente