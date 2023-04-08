import React from 'react';
import Container from 'react-bootstrap/Container'
import ClientLayout from '../../components/admin/ClientLayout';

const Profile = () => {
  return (
    <ClientLayout>
      <main>
        <Container>
          <div className="row">
            <div className="col-md-10">
              <h1>
                User Profile
              </h1>
            </div>
          </div>

          <div className="row mt-5">
            <div className="flex-row-fluid ml-lg-8">
              <div className="card card-custom card-stretch">

                {/*Card Header*/}
                <div className="card-header pt-5">
                  <div className="card-title align-items-start flex-column">
                    <h3 className="card-label font-weight-bolder text-dark"> Personal Information</h3>
                  </div>
                </div>

                {/*Card Body*/}
                <div className="card-body">
                  <div className="row">
                    <h5 className="font-weight-bold mb-6">Information</h5>
                  </div>
                  <div className="form-group-row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right font-weight-bold">First Name</label>
                    <span>Ouro</span>
                  </div>
                  <div className="form-group-row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right font-weight-bold">Last Name</label>
                    <span>User</span>
                  </div>

                  <div className="form-group-row mb-5">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right font-weight-bold">Company</label>
                    <span>Ouro</span>
                  </div>

                  <div className="row">
                      <h5 className="font-weight-bold mt-10 mb-2">Contact Info</h5>
                  </div>

                  <div className="form-group-row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right font-weight-bold">Address</label>
                    <span>1234 Fake Street</span>
                  </div>

                  <div className="form-group-row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right font-weight-bold"></label>
                    <span>Colorado</span>
                  </div>

                  <div className="form-group-row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right font-weight-bold">Country</label>
                    <span>USA</span>
                  </div>

                  <div className="form-group-row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right font-weight-bold">Email</label>
                    <span>ourouser@gmail.com</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </main>
    </ClientLayout>
  )
}

export default Profile;