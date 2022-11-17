import React from 'react'

function Plans() {
  return (
    <section data-scroll-index="0" id="pricing" className="pricing-area pt-115">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8 col-sm-9">
                    <div className="section-title text-center pb-20 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h6 className="sub-title">Pricing Plans</h6>
                        <h4 className="title">Providing Best Pricing <span>For Your Business.</span></h4>
                    </div>
                </div>
            </div>
            <div className="row no-gutters justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="single-pricing text-center pricing-color-1 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <div className="pricing-price">
                            <span className="price"><b>50</b>/m.<span className="symbol">$</span></span>
                        </div>
                        <div className="pricing-title mt-20">
                            <span className="btn">20% Off</span>
                            <h4 className="title">Basic</h4>
                        </div>
                        <div className="pricing-list pt-20">
                            <ul>
                                <li>Full Access</li>
                                <li>Unlimited Bandwidth</li>
                                <li>50 gb Space</li>
                                <li>1 Month Support</li>
                            </ul>
                        </div>
                        <div className="pricing-btn pt-70">
                            <a className="main-btn main-btn-2" href="#">Sign Up Now !</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="single-pricing text-center pricing-active pricing-color-2 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                        <div className="pricing-price">
                            <span className="price"><b>69</b>/m.<span className="symbol">$</span></span>
                        </div>
                        <div className="pricing-title mt-20">
                            <span className="btn">Special</span>
                            <h4 className="title">Standard</h4>
                        </div>
                        <div className="pricing-list pt-20">
                            <ul>
                                <li>Full Access</li>
                                <li>Unlimited Bandwidth</li>
                                <li>50 gb Space</li>
                                <li>1 Month Support</li>
                            </ul>
                        </div>
                        <div className="pricing-btn pt-70">
                            <a className="main-btn" href="#">Sign Up Now !</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="single-pricing text-center pricing-color-3 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                        <div className="pricing-price">
                            <span className="price"><b>99</b>/m.<span className="symbol">$</span></span>
                        </div>
                        <div className="pricing-title mt-20">
                            <span className="btn">New</span>
                            <h4 className="title">Premium</h4>
                        </div>
                        <div className="pricing-list pt-20">
                            <ul>
                                <li>Full Access</li>
                                <li>Unlimited Bandwidth</li>
                                <li>50 gb Space</li>
                                <li>1 Month Support</li>
                            </ul>
                        </div>
                        <div className="pricing-btn pt-70">
                            <a className="main-btn main-btn-2" href="#">Sign Up Now !</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plans