import "./sectionClientes.css"
import { DateTime } from 'luxon'
import { borrarClienteFS } from '../../services/clientService'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ClientesContext } from "../../context/ClientesContext"

const Cliente = ({ id, Nombre, UltimoPago, Estado, DiasRestantes }) => {
    const { contClientesBorrados, setContClientesBorrados } = useContext(ClientesContext)

    const mensajePago = Estado === "Al dia" 
        ? `Días restantes para el próximo pago: ${DiasRestantes}` 
        : `Adeuda hace ${Math.abs(DiasRestantes)} días`

    const borrarCliente = async (idABorrar) => {
        try {
            await borrarClienteFS(idABorrar)
            setContClientesBorrados(contClientesBorrados + 1)    
        } catch (error) {
            console.log("Error al eliminar el cliente: ", error)
        }
    }

    return (
        <div className="col-12 col-clientes">
            <div className="card card-clientes">
                <div className="row g-0">
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <i className="fa-regular fa-user fa-user-card"></i>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{Nombre}</h5>
                            <p className="card-text">Último pago: {UltimoPago}</p>
                            <p className="card-text">{mensajePago}</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <Link to={`/cliente-detail/${id}`}><i className="fa-solid fa-exclamation fa-2x m-2"></i></Link>
                        <i className="fa-solid fa-pen-to-square fa-2x m-2"></i>
                        <i className="fa-solid fa-trash fa-2x m-2" onClick={() => borrarCliente(id)}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cliente