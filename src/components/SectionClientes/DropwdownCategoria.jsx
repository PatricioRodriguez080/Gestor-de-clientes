import React from 'react'

const DropwdownCategoria = ({ setCategoriaAMostrar }) => {

    const modificarCategoria = (cat) => {
        setCategoriaAMostrar(cat)
    }

    return (
        <div className="dropdown">
            <button className="btn dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filtrar
            </button>
            <ul className="dropdown-menu dropdown-menu-categoria">
                <li><a className="dropdown-item text-light" onClick={() => modificarCategoria("Al día")}>Al dia</a></li>
                <li><a className="dropdown-item text-light" onClick={() => modificarCategoria("Adeuda")}>Adeuda</a></li>
                <li><a className="dropdown-item text-light" onClick={() => modificarCategoria("")}>Todos</a></li>
            </ul>
        </div>
    )
}

export default DropwdownCategoria