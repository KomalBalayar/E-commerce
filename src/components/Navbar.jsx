import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">E-Comm</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">HOME </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">BAGS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">SNEAKERS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">BELT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                       
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i>My Profile</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                       <i class="fa fa-search" aria-hidden="true"></i>

                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar