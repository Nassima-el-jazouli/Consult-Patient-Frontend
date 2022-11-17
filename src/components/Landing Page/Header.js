import React from 'react'
import Navbar from '../Partials/Navbar'

function Header() {
  return (
    <header className="header-area">
        <Navbar/>
        
        <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="header-hero-content">
                            <h1 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s"><b>Your</b> <span>Consultancy</span> Partner for <b>Growth.</b></h1>
                            <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Phasellus vel elit efficitur, gravida libero sit amet, scelerisque  tortor arcu, commodo sit amet nulla sed.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
                <div className="image">
                    <img src="assets/images/hero-image.png" alt="Hero Image"/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header