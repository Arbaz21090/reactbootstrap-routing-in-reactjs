import React from 'react'
// import { card } from 'antd';
import './style.css';
// const { Meta } = Card;

function Cards() {
  return (
    <React.Fragment>
    <div className="container">
  <div className="row my-5 d-flex justify-content-center align-items-center" >
    <div class="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/200/310" class="card-img-top" alt="..." style={{height:"200px"}} />
  <div class="card-body">
    <h5 class="fs-5 fw-bold text-center">Rolls Royce</h5>

    
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card">
  <img src="https://picsum.photos/210/300" class="card-img-top" alt="..." style={{height:"200px"}} />
  <div class="card-body">
    <h5 class="fs-5 fw-bold text-center">Maserati</h5>
 
    
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="fs-5 fw-bold text-center">Range Rover</h5>
   
  
  </div>
</div>
    </div>
  
    <div class="col-sm">
    <div class="card">
  <img src="https://picsum.photos/220/301" class="card-img-top" alt="..." style={{height:"200px"}} />
  <div class="card-body">
    <h5 class="fs-5 fw-bold text-center">Porsche</h5>
   

  </div>
</div>
    </div>
  </div>
</div>
    </React.Fragment>
  )
}

export default Cards