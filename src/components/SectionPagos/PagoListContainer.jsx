import React, { useContext } from 'react'
import { ClientesContext } from '../../context/ClientesContext'
import PagoList from './PagoList'

const PagoListContainer = () => {
    const { clientes, loading } = useContext(ClientesContext)

    return (
        <div className="container-pagos">
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <PagoList clientes={clientes} />
            )}
        </div>
    )
}

export default PagoListContainer