import React from 'react'
import "./inicio.css"

const DatosInicio = ({ titulo, info }) => {
    return (
        <div className="container-datos">
            <h2 className="text-center mb-4">{titulo}</h2>
            <h3 className="text-center">{info}</h3>
        </div>
    )
}

export default DatosInicio