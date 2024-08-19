import { useEffect, useState } from 'react'
import PagoList from './PagoList'
import { getClientes } from '../../services/clientService'

const PagoListContainer = () => {
    const [clientes, setClientes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientes = await getClientes()
                setClientes(clientes)
                setLoading(false)
            } catch (error) {
                console.log("Error al traer clientes", error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="container-pagos">
            {loading ? (
                <h2>cargando</h2>
            ) : (
                <PagoList clientes={clientes} />
            )}
        </div>
    )
}

export default PagoListContainer