import React from 'react'
import { Button } from 'react-bootstrap';
import logo2 from './images/logo_dark.png';
function Foot() {
  return (
    <div className='bg-dark mt-1'>
        <div className='container'>
            <div className='row p-4 d-flex justify-content-between'>
                <div className='col text-start'>
                <img src={logo2} id="footerlog" alt="logo"/>
                </div>
               <div className='col text-end'>
              <Button type="primary" variant='danger' className='text-right'>Share A Car</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Foot;