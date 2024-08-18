import React from 'react'
import './tablaPagosCliente.css'

const TablaPagosCliente = ({ Pagos }) => {
    return (
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
    )
}

export default TablaPagosCliente