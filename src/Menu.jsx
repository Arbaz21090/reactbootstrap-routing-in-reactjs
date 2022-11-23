import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './style.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
      <div>

        <Navbar bg="info" expand="lg">
          <Container>
            <Navbar.Brand><Link to="/home">React-Bootstrap</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>

                <NavDropdown title="Courses" id="basic-nav-dropdown">
                  {/* <NavDropdown.Item href="#action/3.1">Our Offers</NavDropdown.Item> */}
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/courses">Our Courses </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Information
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                   Contact Us..
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    );
}

export default Menu;