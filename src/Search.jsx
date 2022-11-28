import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export var Search = () => {
  return (
    <div>
<div className='container'>
    <div className='row my-5'>
    <Form className="d-flex" style={{width:"500px", margin:"auto"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             style={{width:"500px", margin:"auto"}}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </div>
</div>
    </div>
  )
}

