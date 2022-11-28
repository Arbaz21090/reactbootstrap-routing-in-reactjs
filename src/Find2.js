import React from 'react'
import {Container} from 'react-bootstrap'
import drive from './images/drive.png';
import { Button } from 'react-bootstrap';

import './style.css';

function Find2() {
  return (
    <div>
    <Container>
        <div class="row justify-content-center mt-2">
            <div class=" col-sm-5">
                <img src={drive} style={{width:'500px', height:'500px'}} alt=""/>
            </div>
            <div class=" col-sm-5 mt-2">
                <h1 class="display-5 fw-bold mt-5">Find the perfect car<span  class="display-5 fw-bold" style={{color:'#593cfb'}}> to try before you buy</span> </h1>
                <p class="text-muted mt-4">Make sure your future wheels work well with your lifestyle by<br/> taking your time in the driver's seat.</p>
             <Button type='primary' variant='danger'>Browse Cars</Button>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Find2;