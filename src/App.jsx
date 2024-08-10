import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/NavBar/Navbar'
import Inicio from './components/Inicio/Inicio'
import SectionClientes from './components/SectionClientes/SectionClientes'
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
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ClientesContextProvider>
  )
}

export default App
