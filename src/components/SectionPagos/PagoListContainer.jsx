import React, { useContext } from 'react'
import { ClientesContext } from '../../context/ClientesContext'
import SkeletonPagosGenerales from '../Skeletons/SkeletonPagosGenerales'
import PagoList from './PagoList'

const PagoListContainer = () => {
    const { clientes, loading } = useContext(ClientesContext)

    return (
        <div className="container-pagos">
            {loading ? (
                <SkeletonPagosGenerales />
            ) : (
                <PagoList clientes={clientes} />
            )}
        </div>
    )
}

export default PagoListContainer