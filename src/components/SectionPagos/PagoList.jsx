import React from 'react'
import Pago from './Pago'

const PagoList = ({ clientes }) => {
    return (
        <div className="row row-pagos">
            {clientes.map(cliente => (
                <Pago key={cliente.id} {...cliente} />
            ))}
        </div>
    )
}

export default PagoList
