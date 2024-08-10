import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-light">Inicio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to={"/clientes"} className="nav-link text-light">Clientes</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">Pagos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar