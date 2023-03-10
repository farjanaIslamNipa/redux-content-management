import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-container text-white">
        <div className="container">
          <Link to='/' className="navbar-brand">
            <div className='brand-logo'><img src={logo} alt="" /></div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/reading-history">Reading History</Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
