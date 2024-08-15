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
                    <p><small className="text-muted">Último pago: {UltimoPago}</small></p>
                </div>
            </div>
            <div className="cliente-pagos">
                <h2>Pagos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Pagos.map((pago, index) => (
                            <tr key={index}>
                                <td>{pago.Fecha}</td>
                                <td>{pago.Monto}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClienteDetail