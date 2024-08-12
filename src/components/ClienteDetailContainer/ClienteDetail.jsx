import React from 'react'
import './clienteDetail.css'

const ClienteDetail = ({ id, Nombre, Gmail, UltimoPago, Pagos }) => {
    return (
        <div className="cliente-detail-container">
            <div className="cliente-detail">
                <div className="cliente-icon">
                    <i className="fa-regular fa-user fa-2xl"></i>
                </div>
                <div className="cliente-info">
                    <h5>{Nombre}</h5>
                    <p>{Gmail}</p>
                    <p><small className="text-muted">Ultimo pago: {UltimoPago}</small></p>
                </div>
            </div>
            <div className="cliente-pagos">
                <h2>Pagos</h2>
                <h3>{Pagos}</h3>
            </div>
        </div>
    )
}

export default ClienteDetail