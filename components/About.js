import React from "react";

const AboutPage = () => {
  return (
    <main>
      <div className="slider-area o-banner-5 height-500 bg_image bg_image-2" data-gradient-overlay="5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title display-one text-white">
                  Discover a better way forward 
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="o-about-area about-style-1 bg-color-white o-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--0">
              <div className="section-title text-center">
                <h2 className="title pb-4">
                  About Us
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {/* Start Single Card */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="o-info-box">
                <div className="inner" style={{ height:"300px" }}>
                  <div className="content">
                    <h5 className="title">
                      Why Choose Us
                    </h5>
                    <p>
                      Our team consists of experienced and highly skilled 
                      professionals with over three decades of expertise in 
                      providing excellent project management. We guarantee satisfaction in all our services and have 
                      a deep understanding of our clients' business environment and 
                      operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card */}
            {/* Start Single Card */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="o-info-box">
                <div className="inner" style={{ height: "300px" }}>
                  <div className="content">
                    <h5 className="title">
                      Our Capabilities
                    </h5>
                    <p>
                      A professional services company that offers expert advice, 
                      guidance, and actionable solutions in Information Technology, 
                      Management Consulting, and Marketing Research to clients and 
                      customers in the worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card */}
            {/* Start Single Card */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="o-info-box">
                <div className="inner"  style={{ height: "300px" }}>
                  <div className="content">
                    <h5 className="title">
                      Our Mission
                    </h5>
                    <p>
                      We are dedicated to providing exceptional value to our 
                      clients through innovative and unique solutions to their 
                      most pressing challenges, while fostering a positive and 
                      motivational work environment for our employees. Our motto 
                      is "Innovative Solutions for Your Success".
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card */}
          </div>
        </div>
      </div>

      <div className="o-about-area about-style-1 bg-color-white o-section-gap3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--0">
              <div className="section-title text-center">
                <h2 className="title pb-4">
                  Our Team
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4 pb-4">
              <img src="../img/john.jpg" width="100%" />
            </div>
            <div className="col-md-8">
              <h3>John Doe - CEO </h3>
              <p>
                John Doe is the CEO of Ouro, a professional services company that 
                offers expert solutions in IT, management consulting, and 
                marketing research. With years of experience in leadership and 
                business management, John is committed to delivering high-quality 
                services that provide value to clients. His innovative thinking 
                and customer-focused approach have helped Ouro become a trusted 
                partner for businesses looking to achieve success.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4 pb-4">
              <img src="../img/jane.jpg" width="100%" />
            </div>
            <div className="col-md-8">
              <h3>Jane Doe - Executive Vice President </h3>
              <p>
                Jane Doe is the Executive Vice President of Ouro, responsible for 
                overseeing the Management Consulting Business Unit and Client 
                Account Management. She holds a Bachelor's degree in Business 
                Administration from the University of Toronto and a Master's 
                degree in Organizational Behavior from Harvard University. 
                With over 20 years of experience in the industry, Jane has a 
                proven track record of delivering innovative solutions and 
                exceptional results for clients across various sectors. She is a 
                strategic thinker, a skilled communicator, and a passionate 
                leader who is committed to driving growth and success for Ouro 
                and its clients.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4 pb-4">
              <img src="../img/james.jpg" width="100%" />
            </div>
            <div className="col-md-8">
              <h3>James Doe - Senior Executive </h3>
              <p>
                James Doe is the Director of Information Technology Services at Ouro. 
                With over 10 years of experience in Information and Communication 
                Technology, he is a seasoned IT Consultant with expertise ranging from 
                Computer Programming and Network Systems Administration to Information 
                Systems Management and Project Management. He has worked in the 
                telecommunications and banking industries and brings extensive knowledge 
                of technology solutions to business problems. James manages a diverse 
                group of technical consultants who develop and support clients across 
                the company's business sectors. He is a member of the Project Management 
                Institute (PMI).
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage;