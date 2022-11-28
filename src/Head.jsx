import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import logo from './images/logo_dark.png';
import Button from 'react-bootstrap/Button';
import { Form, Input } from 'antd';

function Head() {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <div>
    <Navbar bg="dark" expand="lg" id='nav'>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Learn">Learn More</Link></Nav.Link>
            <Nav.Link><Link to="/Login">Login</Link></Nav.Link>
            <Nav.Link><Link to="/Sign">Sign UP</Link></Nav.Link>
            <Nav.Link><Link to="/Search"><i class="fa-solid fa-magnifying-glass"></i></Link></Nav.Link>
            <Nav.Link><Link to="/"><i class="fa-solid fa-user-plus" onClick={handleShow}></i></Link></Nav.Link>
          </Nav>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button className='bg-primary text-light'>
          Submit
        </Button>
      </Form.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose} className="bg-secondary">
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose} className="bg-primary">
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Head;