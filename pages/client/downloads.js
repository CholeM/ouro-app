import React from 'react';
import Container from 'react-bootstrap/Container'
import ClientLayout from '../../components/admin/ClientLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const downloads = [
  {id: "1", file: "DesignFlowDoc.pdf", size: "16", date: "2021-10-30", link: <a href="#">
  <i className="text-success">
    <FontAwesomeIcon icon={faDownload} />
  </i>
</a>},
  {id: "2", file: "UserGuideMay.pdf", size: "67", date: "2022-08-17", link: <a href="#">
  <i className="text-success">
    <FontAwesomeIcon icon={faDownload} />
  </i>
</a>},
  {id: "3", file: "IssueReport.pdf", size: "11", date: "2023-04-12", link: <a href="#">
  <i className="text-success">
    <FontAwesomeIcon icon={faDownload} />
  </i>
</a>},
  {id: "4", file: "SpecialUpdate.exe", size: "3700", date: "2020-02-03", link: <a href="#">
  <i className="text-success">
    <FontAwesomeIcon icon={faDownload} />
  </i>
</a>},
];

const Downloads = () => {
  
  return (
    <ClientLayout>
      <main>
        <Container>
          <div className="row mb-5">
            <div className="col-md-10">
              <h1>
                My Downloads
              </h1>
            </div>
          </div>

          <div className="card card-custom">
            <div className="card-body">
              <table className="table table-seperate table-head-custom">
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th>Size (kB)</th>
                    <th>Date</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {downloads.length > 0 ? (
                    <>
                      {downloads.map(x => (
                        <tr key={x.id}>
                          <td>{x.file}</td>
                          <td>{x.size}</td>
                          <td>{x.date}</td>
                          <td>{x.link}</td>
                        </tr>
                      ))}
                    </>
                  ): (
                    <td colspan="4" class="text-center">No record found</td>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </main>
    </ClientLayout>
  )
}

export default Downloads;