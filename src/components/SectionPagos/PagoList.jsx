import React from 'react'
import Pago from './Pago'

const PagoList = ({ clientes }) => {
    return (
        <>
            <h2 className="text-center mb-4">Historial de pagos general</h2>
            <table className="text-light tabla-pagos-cliente" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha de Pago</th>
                        <th>Monto de Pago</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <Pago key={cliente.id} Nombre={cliente.Nombre} Pagos={cliente.Pagos} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default PagoList