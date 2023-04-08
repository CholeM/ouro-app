import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { signIn, signUp } from "next-auth/react";
import Link from "next/link";

const Header = (props) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="/">Ouro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/about" className="pe-3">About</Nav.Link>
            <Nav.Link href="/services" className="px-3">Services</Nav.Link>
            <Nav.Link href="/products" className="px-3">Products</Nav.Link>
            <Nav.Link href="/careers" className="px-3">Careers</Nav.Link>
            <Nav.Link href="/contact" className="ps-3 pe-4">Contact</Nav.Link>
            <Link href="/login">
              <Button onClick={() => signIn()} className="header-btn">Client Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;