import "./sectionClientes.css"
import { DateTime } from 'luxon'
import { borrarCliente } from '../../services/clientService'
import { Link } from 'react-router-dom'

const Cliente = ({ id, Nombre, UltimoPago, Pagos }) => {
    const fechaUltimoPago = DateTime.fromFormat(UltimoPago, 'dd/MM/yyyy')
    const fechaProximoPago = fechaUltimoPago.plus({ months: 1 })
    const diasRestantes = Math.ceil(fechaProximoPago.diffNow('days').days)
    const mensajePago = diasRestantes >= 0 ? `Días restantes para el próximo pago: ${diasRestantes}` : `Adeuda hace ${Math.abs(diasRestantes)} días`

    return (
        <div className="col-12 col-clientes">
            <div className="card card-clientes">
                <div className="row g-0">
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <i className="fa-regular fa-user fa-2x"></i>
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