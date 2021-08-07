import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Auth } from './Auth'

export const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                : : FISI DISK : :
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/admin"
                    >
                        Admin
                    </NavLink>

                </div>
            
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <Auth/>
                </ul>
            </div>
        </nav>
        </>
    )
}
