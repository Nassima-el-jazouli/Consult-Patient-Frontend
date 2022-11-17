import React from 'react'

function Services() {
  return (
    <section id="services" className="our-services-area pt-115">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-9">
                    <div className="section-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h6 className="sub-title">Our services</h6>
                        <h4 className="title">Bunch of Services <span>to Rock Your Business</span></h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="our-services-tab pt-30">
                        <ul className="nav justify-content-center wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="active" id="business-tab" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="true">
                                    <i className="lni-briefcase"></i> <span>Business <br/> Consultancy</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id="digital-tab" data-toggle="tab" href="#digital" role="tab" aria-controls="digital" aria-selected="false">
                                    <i className="lni-bullhorn"></i> <span>Digital <br/> Marketing</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a id="market-tab" data-toggle="tab" href="#market" role="tab" aria-controls="market" aria-selected="false">
                                    <i className="lni-stats-up"></i> <span>Market <br/> Analysis</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="business" role="tabpanel" aria-labelledby="business-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="our-services-image mt-50">
                                            <img src="assets/images/our-service-1.jpg" alt="service"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="our-services-content mt-45">
                                            <h3 className="services-title">Business Consultancy <span>for Your Business Growth.</span></h3>
                                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est arcu. Maecenas semper tortor.  <br/>  <br/> In elementum in risus sed commodo. Phasellus nisi ligula, luctus at tempor vitae, placerat at ante. Cras sed consequat justo. Curabitur laoreet eu est vel convallis. </p>
                                            
                                            <div className="our-services-progress d-flex align-items-center mt-55">
                                                <div className="circle" id="circles-1"></div>
                                                <div className="progress-content">
                                                    <h4 className="progress-title">Consultancy<br/> Agency Skill.</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="digital" role="tabpanel" aria-labelledby="digital-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="our-services-image mt-50">
                                            <img src="assets/images/our-service-1.jpg" alt="service"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="our-services-content mt-45">
                                            <h3 className="services-title">Digital Marketing  <span>for Your Business Growth.</span></h3>
                                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est arcu. Maecenas semper tortor.  <br/>  <br/> In elementum in risus sed commodo. Phasellus nisi ligula, luctus at tempor vitae, placerat at ante. Cras sed consequat justo. Curabitur laoreet eu est vel convallis. </p>
                                            
                                            <div className="our-services-progress d-flex align-items-center mt-55">
                                                <div className="circle" id="circles-2"></div>
                                                <div className="progress-content">
                                                    <h4 className="progress-title">Digital Marketing <br/> Skill.</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            
                            <div className="tab-pane fade" id="market" role="tabpanel" aria-labelledby="market-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="our-services-image mt-50">
                                            <img src="assets/images/our-service-1.jpg" alt="service"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="our-services-content mt-45">
                                            <h3 className="services-title">Market Analysis  <span>for Your Business Growth.</span></h3>
                                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est arcu. Maecenas semper tortor.  <br/>  <br/> In elementum in risus sed commodo. Phasellus nisi ligula, luctus at tempor vitae, placerat at ante. Cras sed consequat justo. Curabitur laoreet eu est vel convallis. </p>
                                            
                                            <div className="our-services-progress d-flex align-items-center mt-55">
                                                <div className="circle" id="circles-3"></div>
                                                <div className="progress-content">
                                                    <h4 className="progress-title">Market Analysis <br/> Agency Skill.</h4>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Services