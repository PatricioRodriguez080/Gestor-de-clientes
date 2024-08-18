import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/NavBar/Navbar'
import Inicio from './components/Inicio/Inicio'
import SectionClientes from './components/SectionClientes/SectionClientes'
import AgregarCliente from './components/AgregarCliente/AgregarCliente'
import ClienteDetailContainer from './components/ClienteDetailContainer/ClienteDetailContainer'
import EditarClienteContainer from './components/EditarClienteContainer/EditarClienteContainer'
import AgregarPagoContainer from './components/AgregarPagoContainer/AgregarPagoContainer'
import ClientesContextProvider from './context/ClientesContext'


function App() {

  return (
    <ClientesContextProvider>
      <div className="app-container">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/clientes' element={<SectionClientes />} />
              <Route path='/agregar-cliente' element={<AgregarCliente />} />
              <Route path='/cliente-detail/:idCliente' element={<ClienteDetailContainer />} />
              <Route path='/editar-cliente/:idCliente' element={<EditarClienteContainer />} />
              <Route path='/agregar-pago/:idCliente' element={<AgregarPagoContainer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ClientesContextProvider>
  )
}

export default App
