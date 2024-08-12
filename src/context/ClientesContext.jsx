import React, { createContext, useEffect, useState } from 'react'
import { getClientes } from '../services/clientService'

export const ClientesContext = createContext()

const ClientesContextProvider = ({ children }) => {
    const [clientes, setClientes] = useState([])
    const [cantClientes, setCantClientes] = useState(0)
    const [acumMonto, setAcumMonto] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientes = await getClientes()
                setClientes(clientes)
                setCantClientes(clientes.length)
                setAcumMonto(sumaGanancias(clientes))
                setLoading(false)
            } catch (error) {
                console.error("Error al obtener los datos: ", error)
            }
        }

        fetchData()
    }, [clientes])

    const sumaGanancias = (clientes) => {
        return clientes.reduce((acum, cliente) => {
            const totalPagos = cliente.Pagos.reduce((sum, pago) => {
                const monto = parseFloat(pago.Monto)
                return sum + (isNaN(monto) ? 0 : monto)
            }, 0)
            return acum + totalPagos
        }, 0)
    }

    return (
        <ClientesContext.Provider value={{ clientes, cantClientes, loading, acumMonto }}>
            {children}
        </ClientesContext.Provider>
    )
}

export default ClientesContextProvider