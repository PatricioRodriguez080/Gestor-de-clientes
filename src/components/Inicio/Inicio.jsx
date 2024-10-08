import { useContext } from "react"
import "./inicio.css"
import { ClientesContext } from "../../context/ClientesContext"
import DatosInicio from "./DatosInicio"
import SkeletonDatosInicio from "../Skeletons/SkeletonDatosInicio"

const Inicio = () => {
  const { cantClientes, acumMonto, contClientesBorrados, loading } = useContext(ClientesContext)

  return (
    <>
      <h1 className="text-center mt-4">Bienvenido!</h1>
      <div className="container-inicio">
        {loading ? (
          <SkeletonDatosInicio />
        ) : (
          <>
            <DatosInicio titulo={"Clientes"} info={cantClientes} />
            <DatosInicio titulo={"Ganancia"} info={acumMonto} />
            <DatosInicio titulo={"Clientes Borrados"} info={contClientesBorrados} />
          </>
        )}
      </div>
    </>
  )
}

export default Inicio