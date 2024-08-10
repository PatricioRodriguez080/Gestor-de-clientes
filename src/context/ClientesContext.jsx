import React, { createContext, useEffect, useState } from 'react'
import { getClientes } from '../services/clientService'

export const ClientesContext = createContext()

const ClientesContextProvider = ({ children }) => {
    const [clientes, setClientes] = useState([])
    const [cantClientes, setCantClientes] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientes = await getClientes()
                setClientes(clientes)
                setCantClientes(clientes.length)
            } catch (error) {
                console.error("Error al obtener los datos: ", error)
            }
        }

        fetchData()
    }, [clientes])

    return (
        <ClientesContext.Provider value={{ clientes, cantClientes }}>
            {children}
        </ClientesContext.Provider>
    )
}

export default ClientesContextProvider