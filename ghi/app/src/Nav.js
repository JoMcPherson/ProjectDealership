import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Inventory Department Dropdown */}
            <li className='nav-item dropdown'>
              <a className="nav-link dropdown-toggle" href="#" id="inventoryMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory Department
              </a>
              <ul className="dropdown-menu" aria-labelledby="inventoryMenu">
                <li className='dropdown-item'>
                  <NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='dropdown-item'>
                  <NavLink className="dropdown-item" to="/manufacturers/create">Create a Manufacturer</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='dropdown-item'>
                  <NavLink className="dropdown-item" to="/models">Models</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="dropdown-item">
                  <NavLink className="dropdown-item" to="/models/create">Create a Model</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="dropdown-item">
                  <NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="dropdown-item">
                  <NavLink className="dropdown-item" to="/automobiles/create">Create an Automobile</NavLink>
                </li>
                <div className="dropdown-divider"></div>
              </ul>
            </li>

            {/* Service Department Dropdown */}
            <li className='nav-item dropdown'>
              <a className="nav-link dropdown-toggle" href="#" id="serviceMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service Department
              </a>
              <ul className="dropdown-menu" aria-labelledby="serviceMenu">
                <li className='dropdown-item'>
                  <NavLink className="dropdown-item" to="/appointments">Appointments</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='dropdown-item'>
                  <NavLink className="dropdown-item" to="/appointments/create">Create an Appointment</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="dropdown-item">
                  <NavLink className="dropdown-item" to="/technicians">Technicians</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="dropdown-item">
                  <NavLink className="dropdown-item" to="/technicians/create">Create a Technician</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='dropdown-item'>
                  <NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink>
                </li>
                <div className="dropdown-divider"></div>
              </ul>
            </li>

            {/* Sales Department Dropdown */}
            <li className='nav-item dropdown'>
              <a className="nav-link dropdown-toggle" href="#" id="salesMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales Department
              </a>
              <ul className="dropdown-menu" aria-labelledby="salesMenu">
                <li className='nav-item'>
                  <NavLink className="dropdown-item" to="/salespeople">Salespeople</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='nav-item'>
                  <NavLink className="dropdown-item" to="/salespeople/create">Add a Salesperson</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='nav-item'>
                  <NavLink className="dropdown-item" to="/salespersonhistory">Salesperson History</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='nav-item'>
                  <NavLink className="dropdown-item" to="/sales">Sales</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='nav-item'>
                  <NavLink className="dropdown-item" to="/sales/create">Record a Sale</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='nav-item'>
                  <NavLink className="dropdown-item" to="/customers">Customers</NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className='nav-item'>
                  <NavLink className="dropdown-item" to="/customers/create">Add a Customer</NavLink>
                </li>
                <div className="dropdown-divider"></div>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
