import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="outer_div">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">MyStore</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to={'/'}>Home</NavLink>
                        <NavLink className="nav-item nav-link" to={'/wishlist'}>Wishlist</NavLink>
                        <NavLink className="nav-item nav-link" to={'/cart'}>Cart</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header