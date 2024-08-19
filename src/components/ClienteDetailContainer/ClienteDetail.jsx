import React from 'react'
import './clienteDetail.css'
import TablaPagosCliente from './TablaPagosCliente/TablaPagosCliente'
import ClienteInfo from './ClienteInfo/ClienteInfo'

const ClienteDetail = ({ id, Nombre, Gmail, UltimoPago, Pagos }) => {
    return (
        <div className="cliente-detail-container">
            <ClienteInfo infoCliente={{Nombre, Gmail, UltimoPago}} />
            <div className="cliente-pagos mt-5">
                <h2>Hitorial de pagos</h2>
                <TablaPagosCliente Pagos={Pagos}/>
            </div>
        </div>
    )
}

export default ClienteDetail