import React from 'react'

function ContactUs() {
  return (
    <section id="contact" className="contact-area pt-120 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="section-title text-center pb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h6 className="sub-title">Our Contact</h6>
                        <h4 className="title">Get In <span>Touch.</span></h4>
                    </div>
                </div>
            </div>
            <div className="contact-info pt-30">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-contact-info contact-color-1 mt-30 d-flex  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="contact-info-icon">
                                <i className="lni-map-marker"></i>
                            </div>
                            <div className="contact-info-content media-body">
                                <p className="text">21 King Street, Melbourne <br/> Victoria, 1202 Australia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-contact-info contact-color-2 mt-30 d-flex  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                            <div className="contact-info-icon">
                                <i className="lni-envelope"></i>
                            </div>
                            <div className="contact-info-content media-body">
                                <p className="text">hello@uideck.com</p>
                                <p className="text">support@uideck.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-contact-info contact-color-3 mt-30 d-flex  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
                            <div className="contact-info-icon">
                                <i className="lni-phone"></i>
                            </div>
                            <div className="contact-info-content media-body">
                                <p className="text">+99 000 1111 555</p>
                                <p className="text">+88 999 5555 444</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact-wrapper-form pt-115  wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <h4 className="contact-title pb-10"><i className="lni-envelope"></i> Leave <span>A Message.</span></h4>
                        
                        <form id="contact-form" action="assets/contact.php" method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <label>Enter Your Name</label>
                                        <input type="text" name="name" placeholder="Full Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <label>Enter Your Email</label>
                                        <input type="email" name="email" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="contact-form mt-45">
                                        <label>Your Message</label>
                                        <textarea name="message" placeholder="Enter your message..."></textarea>
                                    </div>
                                </div>
                                <p className="form-message"></p>
                                <div className="col-md-12">
                                    <div className="contact-form mt-45">
                                        <button type="submit" className="main-btn">Send Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs