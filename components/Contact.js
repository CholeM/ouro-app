import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main>
      <div className="slider-area o-banner-5 height-500 bg_image bg_image-11" data-gradient-overlay="5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title display-one text-white">
                  We've got your back
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="o-about-area about-style-1 bg-color-white o-section-gap3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-5">
              <h2>Send A Message</h2>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="forEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="forPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="forSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="forMEssage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Your message" />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
              
            </div>

            <div className="col-md-5 pl-5">
              <h3>Call</h3>
              <p>Tel: (246) 431-8950</p>
              <h3>Mail</h3>
              <p>Ouro Inc.<br />
                12345 Fake Street<br />
                Silicone Valley, CA<br />
                USA<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main> 
  )
}

export default ContactPage;