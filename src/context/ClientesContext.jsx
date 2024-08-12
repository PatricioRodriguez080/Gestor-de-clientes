import React, { createContext, useEffect, useState } from 'react'
import { getClientes } from '../services/clientService'

export const ClientesContext = createContext()

const ClientesContextProvider = ({ children }) => {
    const [clientes, setClientes] = useState([])
    const [cantClientes, setCantClientes] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientes = await getClientes()
                setClientes(clientes)
                setLoading(false)
                setCantClientes(clientes.length)
            } catch (error) {
                console.error("Error al obtener los datos: ", error)
            }
        }

        fetchData()
    }, [clientes])

    return (
        <ClientesContext.Provider value={{ clientes, cantClientes, loading }}>
            {children}
        </ClientesContext.Provider>
    )
}

export default ClientesContextProvider