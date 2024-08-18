import React from 'react'
import './clienteDetail.css'
import ClienteIcon from '../SectionClientes/ClienteIcon/ClienteIcon'
import TablaPagosCliente from './TablaPagosCliente/TablaPagosCliente'

const ClienteDetail = ({ id, Nombre, Gmail, UltimoPago, Pagos }) => {
    return (
        <div className="cliente-detail-container">
            <div className="cliente-detail">
                <ClienteIcon/>
                <div className="cliente-info">
                    <h5>{Nombre}</h5>
                    <p>{Gmail}</p>
                    <p><small className="text-muted">Último pago: {UltimoPago}</small></p>
                </div>
            </div>
            <div className="cliente-pagos mt-5">
                <h2>Pagos</h2>
                <TablaPagosCliente Pagos={Pagos}/>
            </div>
        </div>
    )
}

export default ClienteDetail