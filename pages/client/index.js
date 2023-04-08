import React from 'react';
import Container from 'react-bootstrap/Container'
import ClientLayout from '../../components/admin/clientLayout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

export default function Index() {
  const news = [
    { id: "1", title: "Jan Update", icon: <a href="#"><i className="text-success"><FontAwesomeIcon icon={faDownload} /></i></a>},
    { id: "2", title: "Feb Update", icon: <a href="#"><i className="text-success"><FontAwesomeIcon icon={faDownload} /></i></a>},
    { id: "3", title: "Mar Update", icon: <a href="#"><i className="text-success"><FontAwesomeIcon icon={faDownload} /></i></a>}
  ]

  return (
    <ClientLayout>
      <main>
        <Container>
          <div className="row mb-5">
            <div className="col-md-10">
              <h1>
                Dashboard
              </h1>
              <div>
                You are logged in!
              </div>
            </div>
          </div>

          <div className="card card-custom col-lg-6 mt-10">
            <div className="card-header flex-wrap border-0 pt-6 pb-0">
              <h3 className="card-title font-weight-bolder text-dark">Newsletter</h3>
            </div>

            <div className="card-body">
              
              {news.length > 0 
              ? (
                <>
                {news.map(item => (
                  <div className="d-flex align-items-center mb-10" key={item.id}>
                    <div className="symbol symbol-40 symbol-light-primary mr-5">
                      <span className="symbol-label">
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                      <span className="text-dark text-hover-primary mb-1 font-size-lg">
                        {item.title}
                      </span>
                    </div>

                    <div className="ml-2" data-toggle="tooltip" title="Download" data-placement="top">
                      {item.icon}
                    </div>
                  </div>
                ))}
                </>
              ) : (

                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <span className="text-dark text-hover-primary mb-1 font-size-lg">No newsletters available</span>
                </div>
              )}
            <div className="text-right"></div>
              
            </div>
          </div>
        </Container>
      </main>
    </ClientLayout>
  )
}
