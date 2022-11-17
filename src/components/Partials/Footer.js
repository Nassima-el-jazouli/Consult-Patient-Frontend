import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="footer-area bg_cover">
        <div className="container">
            <div className="footer-widget pt-30 pb-70">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 order-sm-1 order-lg-1">
                        <div className="footer-about pt-40">
                            <a href="#">
                                <img src="assets/images/logo.png" alt="Logo"/>
                            </a>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repudiandae! Totam, nemo sed? Provident.</p> <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 order-sm-3 order-lg-2">
                        <div className="footer-link pt-40">
                            <div className="footer-title">
                                <h5 className="title">Services</h5>
                            </div>
                            <ul>
                                <li><a href="#">Business Consultancy</a></li>
                                <li><a href="#">Digital Marketing</a></li>
                                <li><a href="#">Market Analysis</a></li>
                                <li><a href="#">Web Development</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 order-sm-4 order-lg-3">
                        <div className="footer-link pt-40">
                            <div className="footer-title">
                                <h5 className="title">About Us</h5>
                            </div>
                            <ul>
                                <li><a href="#">Overview</a></li>
                                <li><a href="#">Why us</a></li>
                                <li><a href="#">Awards & Recognitions</a></li>
                                <li><a href="#">Team</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 order-sm-2 order-lg-4">
                        <div className="footer-contact pt-40">
                            <div className="footer-title">
                                <h5 className="title">Contact Info</h5>
                            </div>
                            <div className="contact pt-10">
                                <p className="text">21 King Street, Melbourne <br/>
                                    Victoria, 1202 Australia.</p>
                                <p className="text">support@uideck.com</p>
                                <p className="text">+99 000 555 66 22</p>

                                <ul className="social mt-40">
                                    <li><a href="#"><i className="lni-facebook"></i></a></li>
                                    <li><a href="#"><i className="lni-twitter"></i></a></li>
                                    <li><a href="#"><i className="lni-instagram"></i></a></li>
                                    <li><a href="#"><i className="lni-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center">
                <p className="text">© 2022 Crafted by <a href="" rel="nofollow">consult-patient.com</a> All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer