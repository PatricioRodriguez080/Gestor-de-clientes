import { useContext } from "react"
import "./inicio.css"
import { ClientesContext } from "../../context/ClientesContext"

const Inicio = () => {
  const { cantClientes, acumMonto, contClientesBorrados } = useContext(ClientesContext)

  return (
    <>
      <h1 className="text-center mt-4">Bienvenido!</h1>
      <div className="container-inicio">
        <div className="container-datos">
          <h2 className="text-center mb-4">Clientes</h2>
          <h3 className="text-center">{cantClientes}</h3>
        </div>
        <div className="container-datos">
          <h2 className="text-center mb-4">Gnancia</h2>
          <h3 className="text-center">{acumMonto}</h3>
        </div>
        <div className="container-datos">
          <h2 className="text-center mb-4">Clientes borrados</h2>
          <h3 className="text-center">{contClientesBorrados}</h3>
        </div>
      </div>
      <h2>ACA PODRIA PONER UN GRAFICO CON CHART JS EN EL QUE ME MUESTRE LOS CLIENTES SEGUN EL MES Y LOS INGRESOS SEGUN EL MES</h2>
    </>
  )
}

export default Inicio