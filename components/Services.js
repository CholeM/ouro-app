import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTasks,
  faUserTie,
  faExclamationCircle,
  faClipboardList,
  faComments,
  faChartBar,
  faLaptopCode,
  faNetworkWired,
  faProjectDiagram,
  faHeadset,
  faCompactDisc,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import React from "react";

const ServicesPage = () => {
  return (
    <main>
      <div className="slider-area o-banner-5 height-500 bg_image bg_image-3" data-gradient-overlay="5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title display-one text-white">
                  How We Can Help You
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="o-service-area bg-color-white o-section-gap3">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title pb-2">Management Consulting</h2>
                <p className="description">
                  At Ouro, our consulting practice is dedicated to 
                  delivering sustainable performance improvement 
                  and driving significant change for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 mt_dec--30">
            {/* Card 1 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                    <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faTasks} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Strategic Planning</h5>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro has a proven track record of assisting clients in 
                      defining their long-term objectives and the necessary 
                      steps to achieve them. Our team has successfully crafted 
                      strategic plans for a wide range of companies globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                    <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faUserTie} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Project Planning</h5>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro provides extensive Project Management services, 
                      serving as project representatives for clients 
                      across industries to protect their interests, reduce 
                      risks, and increase performance and compliance to 
                      schedules and budgets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                    <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faExclamationCircle} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Risk Management</h5>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro has a strong history of providing risk management 
                      consulting services. Our consultants are knowledgeable 
                      and experienced in the current business environment. 
                      We can help clients manage risk and enhance resilience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Research */}
      <div className="o-service-area bg-color-white o-section-gap3">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title pb-2">Marketing Research</h2>
                <p className="description">
                  Our belief is that every research project should 
                  yield actionable outcomes, capturing market needs, 
                  industry trends, and customer feedback in real-time 
                  to facilitate better decision-making when you need it.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 mt_dec--30">
            {/* Card 1 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                    <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faClipboardList} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Research</h5>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro's consulting approach is based on secondary research, 
                      utilizing diverse and reliable sources, such as government 
                      agencies, labour unions and media, to inform primary 
                      research and address client needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                  <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faComments} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Qualitative Research</h5>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro's quantitative marketing research studies prioritize 
                      quality, consistency and reliability. We collect data 
                      through questionnaires to measure attitudes, perceptions, 
                      expectations and behaviors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                  <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faChartBar} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Quantitative Research</h5>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro has extensive experience in conducting quantitative 
                      research for diverse industries and markets, including 
                      government, finance, manufacturing, and retail sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ICT */}
      <div className="o-service-area bg-color-white o-section-gap3">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title pb-2">Information and Communication Technology</h2>
                <p className="description">
                  Our professional information technology consulting 
                  services encompass all aspects of software development, 
                  providing a comprehensive range of solutions to meet 
                  your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 mt_dec--30">
            {/* Card 1 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                  <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faLaptopCode} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Software Development</h5>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro is a top provider of software and database 
                      application development, known for creating in-house 
                      applications in various industries including social 
                      security, student management, and finance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                  <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faNetworkWired} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Network Administration</h5>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro offers comprehensive network management services 
                      to ensure the uninterrupted provision of services to 
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                  <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faProjectDiagram} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Systems Integration</h5>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro's systems integration approach focuses on improving 
                      business processes. By consolidating information from 
                      disparate database application systems, we help clients 
                      make informed enterprise decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outsourcing */}
      <div className="o-service-area bg-color-white o-section-gap3">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title pb-2">Outsourcing</h2>
                <p className="description">
                  Our ability to provide tailored, high-quality, 
                  and cost-effective solutions is aimed at 
                  enhancing your business operations.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 mt_dec--30">
            {/* Card 1 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                  <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faHeadset} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Call Centre</h5>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro operates a Contact and Call Centre managed by 
                      a well-trained team of Telephone Support Representatives. 
                      Our services cover Canada, USA, and Europe for both 
                      outbound and inbound coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                  <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faCompactDisc} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Software As A Service (SaaS)</h5>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro offers a powerful and secure SaaS service that 
                      allows businesses to easily access and utilize our 
                      software solutions on a subscription basis, enabling 
                      greater flexibility and scalability for their operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
              <div className="o-flipbox">
                <div className="o-flipbox-wrap o-service o-service-1 card-bg-1">
                  <div className="o-flipbox-front o-flipbox-face inner">
                  <div className="icon2 text-white text-center">
                      <i>
                        <FontAwesomeIcon icon={faDatabase} />
                      </i>
                    </div>
                    <div className="content text-white">
                      <h5 className="title text-center">Data Mining</h5>
                    </div>
                  </div>
                  <div className="o-flipbox-back o-flipbox-face inner">
                    <p>
                      Ouro turns your data into valuable insights for informed 
                      decision-making and management reporting. Our expert 
                      programmers use cutting-edge technology to analyze your 
                      data, revealing new insights and predictive trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ServicesPage;