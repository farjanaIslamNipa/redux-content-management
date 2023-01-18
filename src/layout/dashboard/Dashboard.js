import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Main/Navbar'
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Outlet />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
