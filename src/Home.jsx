import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export var Home =()=>{
    return(
      <div>
        <Container className="mt-2">
            <h2 className="display-6">Welcome to Routing in React js</h2>
            <p>
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
            </p>
           <Row>
             <Col sm={9} className="bg-secondary p-4 text-white">
                <h3 className="lead">About Us</h3>
                <p>
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                </p>
                <p>
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                </p>
             </Col>
             <Col sm={3} className="bg-danger p-4 text-white">
                <p>
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                </p>
             </Col>
           </Row>
        </Container>

      </div>
    );
}