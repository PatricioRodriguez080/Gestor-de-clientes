import React, { createContext, useEffect, useState } from 'react'
import { getFirestore, collection, onSnapshot, doc } from 'firebase/firestore'
import { getContClientesBorrados } from '../services/clientService'

export const ClientesContext = createContext()

const db = getFirestore()

const ClientesContextProvider = ({ children }) => {
    const [clientes, setClientes] = useState([])
    const [cantClientes, setCantClientes] = useState(0)
    const [acumMonto, setAcumMonto] = useState(0)
    const [contClientesBorrados, setContClientesBorrados] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // onSnapshot se suscribe a los cambios en la colección Clientes. Cada vez que hay un cambio, se obtiene el snapshot de los datos y se actualiza el estado //
        const unsubscribe = onSnapshot(collection(db, 'Clientes'), (snapshot) => {
            const clientesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setClientes(clientesData)
            setCantClientes(clientesData.length)
            setAcumMonto(sumaGanancias(clientesData))
        }, (error) => {
            console.error("Error al obtener los datos: ", error)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const fetchContClientesBorrados = async () => {
            try {
                const cantidadBorrados = await getContClientesBorrados()
                setContClientesBorrados(cantidadBorrados)
                setLoading(false)
            } catch (error) {
                console.error("Error al obtener la cantidad de clientes borrados: ", error)
            }
        }

        fetchContClientesBorrados()
    }, [])

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
        <ClientesContext.Provider value={{ clientes, cantClientes, loading, acumMonto, contClientesBorrados, setContClientesBorrados }}>
            {children}
        </ClientesContext.Provider>
    )
}

export default ClientesContextProvider