import React from 'react'
import './clienteDetail.css'
import ClienteIcon from '../SectionClientes/ClienteIcon/ClienteIcon'

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
                <table className="text-light">
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
                                <td>{`$${pago.Monto}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClienteDetail