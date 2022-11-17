import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar-area headroom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/images/logo.png" alt="Logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav m-auto">
                                    <li className="nav-item active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/plans">Plans</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contactUs">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="navbar-btn d-none d-sm-inline-block">
                                <Link className="main-btn" data-scroll-nav="0" to="/consult">Consult Patient Now</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar