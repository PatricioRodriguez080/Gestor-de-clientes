import React from 'react'
import ClienteIcon from '../../SectionClientes/ClienteIcon/ClienteIcon'

const ClienteInfo = ({ infoCliente }) => {
    return (
        <div className="cliente-detail">
            <ClienteIcon />
            <div className="cliente-info">
                <h5>{infoCliente.Nombre}</h5>
                <p>{infoCliente.Gmail}</p>
                <p><small className="text-muted">Último pago: {infoCliente.UltimoPago}</small></p>
            </div>
        </div>
    )
}

export default ClienteInfo