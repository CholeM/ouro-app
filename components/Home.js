import React from "react";
import sal from "sal.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const Homepage = () => {
  return (
    <main>
      <div className="slider-area o-banner-5 height-750 bg_image bg_image-3" data-gradient-overlay="7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title display-one">
                  Innovate & Grow with Ouro
                </h1>
                <p className="description">
                  Revolutionize Your Business with Cutting-Edge Solutions  
                </p>
                <div className="o-button-group">
                  <Button href="/about" className="o-btn btn-white hover-icon-reverse">
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon">
                        <i>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                      </span>
                      <span className="btn-icon">
                        <i>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                      </span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="o-about-area about-style-1 bg-color-white o-section-gap3">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <div className="content">
                <h2 className="title mb--0 sal-animate" data-sal="slide-up" data-sal-duration="700">
                  About Our Business
                </h2>
              </div>
            </div>
            <div className="col-lg-6 sal-animate" data-sal="slide-up" data-sal-duration="700">
              <p className="mb--40 mb_sm--20">
                Ouro is a Barbados-based company that offers 
                IT consulting and support services to businesses 
                and organizations. Their services cover various areas 
                such as software development, network design and 
                implementation, cybersecurity, data backup and recovery, 
                and IT project management. With a history of operating 
                in Barbados, Ouro has built a reputation for delivering 
                dependable and efficient IT solutions to its clients.
              </p>
              <div className="readmore-btn">
                <a href="/about" className="o-modern-btn">
                  <span className="modern-btn-text">Company Overview</span>
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </a>
              </div>
            </div>
          </div>   
        </div>
      </div>

      <div className="o-about-area bg-color-gray o-section-gap3">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="inner">
                <div className="section-title text-start">
                  <h2 className="title">Our Competitive Advantage</h2>
                  <p className="descripton mt--20">
                    At Ouro, our team comprises highly skilled professionals with over 
                    three decades of experience. We have a solid reputation for being 
                    business-savvy, delivering exceptional project management, and 
                    serving as excellent partners to our clients. With a deep 
                    understanding of our clients' work environment and business 
                    operations, we proactively respond to their needs and always 
                    strive for their satisfaction with any of the services we offer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail">
                <img src="../img/choose us.jpg" alt="why choose us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="o-service-area bg-color-white o-section-gap3">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title pb-4">Services</h2>
                <p className="description">
                  Delivering services that meet your business needs 
                  is crucial to achieving positive results. <br />
                  Let us gain a clear understanding of your unique 
                  requirements so that we can provide solutions that 
                  best fit your needs.
                  </p>
              </div>
            </div>
          </div>
          {/* Start Cards */}
          <div className="row row--15 mt_dec--30">
            {/* One Card */}
            <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                    <div className="icon">

                    </div>
                    <div className="content text-white">
                      <h5 className="title">Management Consulting</h5>
                      <p>
                        At Ouro, our consulting practice is dedicated to 
                        delivering sustainable performance improvement 
                        and driving significant change for our clients.
                      </p>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      At Ouro, our consulting practice is dedicated to 
                      delivering sustainable performance improvement 
                      and driving significant change for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Two Card */}
            <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-2">
                  <div className="o-flipbox-front o-flipbox-face inner">
                    <div className="icon">

                    </div>
                    <div className="content text-white">
                      <h5 className="title">Marketing Research</h5>
                      <p>
                        Our belief is that every research project should 
                        yield actionable outcomes, capturing market needs, 
                        industry trends, and customer feedback in real-time 
                        to facilitate better decision-making when you need it.
                      </p>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Our belief is that every research project should 
                      yield actionable outcomes, capturing market needs, 
                      industry trends, and customer feedback in real-time 
                      to facilitate better decision-making when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Three Card */}
            <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                    <div className="icon">

                    </div>
                    <div className="content text-white">
                      <h5 className="title">Information and Communications Technology</h5>
                      <p>
                        Our professional information technology consulting 
                        services encompass all aspects of software development, 
                        providing a comprehensive range of solutions to meet 
                        your business needs.
                      </p>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Our professional information technology consulting 
                      services encompass all aspects of software development, 
                      providing a comprehensive range of solutions to meet 
                      your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Four Card */}
            <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-2">
                  <div className="o-flipbox-front o-flipbox-face inner">
                    <div className="icon">

                    </div>
                    <div className="content text-white">
                      <h5 className="title">Outsourcing</h5>
                      <p>
                        Our ability to provide tailored, high-quality, 
                        and cost-effective solutions is aimed at 
                        enhancing your business operations.
                      </p>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Our ability to provide tailored, high-quality, 
                      and cost-effective solutions is aimed at 
                      enhancing your business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>        
          </div>
          {/* End Cards */}
        </div>
      </div>

      {/* Carousel */}
      <div className="o-brand-area bg-color-white o-section-gap3">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12">
              <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
                <li>
                  <a href="#"><img src="../img/brand-01.png" /></a>
                </li>
                <li>
                  <a href="#"><img src="../img/brand-02.png" /></a>
                </li>
                <li>
                  <a href="#"><img src="../img/brand-03.png" /></a>
                </li>
                <li>
                  <a href="#"><img src="../img/brand-04.png" /></a>
                </li>
                <li>
                  <a href="#"><img src="../img/brand-06.png" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Homepage;