import React, { useState } from 'react'
import { actualizarClienteFS } from '../../services/clientService'

const EditarCliente = ({ id, Nombre, Gmail, UltimoPago }) => {
    const [nombreNuevo, setNombreNuevo] = useState(Nombre)
    const [gmailNuevo, setGmailNuevo] = useState(Gmail)

    const actualizarCliente = async () => {
        const clienteActualizado = {
            Nombre: nombreNuevo,
            Gmail: gmailNuevo,
        }
        
        try {
            await actualizarClienteFS(clienteActualizado, id)
        } catch (error) {
            console.log("Error al actualizar cliente", error)
        }
    }

    return (
        <>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="Nombre"
                    value={nombreNuevo}
                    onChange={(e) => setNombreNuevo(e.target.value)}
                />
                <label htmlFor="floatingName">Nombre</label>
            </div>
            <div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com"
                        value={gmailNuevo}
                        onChange={(e) => setGmailNuevo(e.target.value)}
                    />
                    <label htmlFor="floatingEmail">Gmail</label>
                </div>
            </div>
            <button className='btn' onClick={actualizarCliente}>Actualizar cliente</button>
        </>
    )
}

export default EditarCliente