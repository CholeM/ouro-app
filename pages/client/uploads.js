import React from 'react';
import Container from 'react-bootstrap/Container'
import ClientLayout from '../../components/admin/ClientLayout';

const uploads = [
  {id: "1", file: "issue.pdf", size: "16", date: "2021-10-30"},
  {id: "2", file: "issue2.pdf", size: "167", date: "2022-08-17"},
  {id: "3", file: "issue3.pdf", size: "114", date: "2023-04-12"},
  {id: "4", file: "issue5.pdf", size: "37", date: "2020-02-03"},
];

const Uploads = () => {
  return (
    <ClientLayout>
      <main>
        <Container>
          <div className="row">
            <div className="col-md-10">
              <h1>
                My Uploads
              </h1>
            </div>
          </div>

          <div className="card card-custom">

            <div className="card-header flex-wrap border-0 pt-6">

              <form encType="multipart/form-data">
                <div className="row">
                  <div className="col-md-10">
                    <input type="file" name="file" className="form-control" />
                  </div>

                  <div className="col-md-2">
                    <button href="#" className="btn btn-success">Upload</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="card-body">
              <hr className="group_by"></hr>
              <div className="col-md-11">
              </div>
              
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-separate table-head-custom" id="uploads-table">
                    <thead>
                      <tr>
                        <th>File Name</th>
                        <th>Size (kB)</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uploads.length > 0 ? (
                        <>
                          {uploads.map(x => (
                            <tr key={x.id}>
                              <td>{x.file}</td>
                              <td>{x.size}</td>
                              <td>{x.date}</td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <td colspan="4" class="text-center">No record found</td>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </main>
    </ClientLayout>
  )
}

export default Uploads;