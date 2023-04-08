import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Footer from '../components/LoginFooter';


const Login = () => {

  return (
    <>
    <main id="page">
      <div className="o-elements-area o-section-gapBottom">
        <Container className="login main-login">
          <div className="row login-content">
            <div className="col-lg-11 offset-lg-1 mt_dec--50">
              <div className="mt--50">
                <div className="o-contact-form contact-form-style max-width-auto">
                  <h3 className="text-dark text-center title">Client Login</h3>
                  <Form className="max-width-auto">
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        className="form-control form-control-solid h-auto py-3 px-3 rounded-lg" 
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        defaultValue="ourouser@gmail.com"
                        aria-label="Email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <div className="d-flex justify-content-between mt-n5">
                        <Form.Label className="font-weight-bolder text-dark">Password</Form.Label>
                        <a href="#" className="font-weight-bolder text-hover-primary">
                          Forgot Password?
                        </a>
                      </div>
                      <Form.Control
                        className="form-control form-control-solid h-auto py-3 px-3 rounded-lg"
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        aria-label="Password"
                        defaultValue="password1" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheck">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button href="/client" size="lg" className="login-btn">
                        Login
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Login;