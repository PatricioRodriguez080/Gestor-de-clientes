import './App.css'
import Navbar from './components/NavBar/Navbar'
import Inicio from './components/Inicio/Inicio'

function App() {

  return (
    <ClientesContextProvider>
      <div className="app-container">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Inicio />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ClientesContextProvider>
  )
}

export default App
