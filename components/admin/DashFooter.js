import React from 'react'
import { Container } from 'react-bootstrap'

export default function DashFooter() {
  return (
    <footer className="footer border-top px-sm-2 py-2">
      <Container fluid className="align-items-center flex-column flex-md-row d-flex justify-content-between text-white">
        <div>
          <a className="text-decoration-none text-white" href="/">Home </a>
        </div>
        <div className="ms-md-auto">
          Powered by&nbsp;
          <a
            className="text-decoration-none text-white font-bold"
            href="#"
          >
            Chole M
          </a>
        </div>
      </Container>
    </footer>
  )
}