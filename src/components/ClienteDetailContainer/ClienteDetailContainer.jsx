import React, { useState } from 'react'
import './clienteDetail.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getClienteDetail } from '../../services/clientService'
import ClienteDetail from './ClienteDetail'

const ClienteDetailContainer = () => {
    const { idCliente } = useParams()
    const [clienteAMostrar, setClienteAMostrar] = useState()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const cliente = await getClienteDetail(idCliente)
                setClienteAMostrar(cliente)
            } catch (error) {
                console.log("Error al traer detalles", error);     
            }
        }

        fetchdata()
    }, [idCliente])

    return (
        <div className="container-cliente-detail">
            <ClienteDetail {...clienteAMostrar} />
        </div>
    )
}

export default ClienteDetailContainer