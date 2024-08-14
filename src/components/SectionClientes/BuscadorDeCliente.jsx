import React from 'react'

const BuscadorDeCliente = ({ setClienteAMostrar }) => {
  const handleInputChange = (event) => {
    setClienteAMostrar(event.target.value)
  }

  return (
    <div className="buscador-container">
      <input 
        type="text" 
        className="buscador-input text-light" 
        placeholder="Buscar cliente..." 
        onChange={handleInputChange} 
      />
    </div>
  )
}

export default BuscadorDeCliente