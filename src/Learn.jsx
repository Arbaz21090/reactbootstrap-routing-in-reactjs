import React from 'react'
import './style.css';

export var Learn =()=> {
  return (
    <div>
    <div class="container">
       <div className='row mt-5 g-5'>
       <h2 className='text-center display-3 fw-bolder bg-info w-5 text-muted'>Mercedes</h2>
       <div className='col-sm-6 text-left'>
        <h3 class="display-4 fw-large">Learn More...</h3>
        <p style={{textAlign:"justify"}}>Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fuelled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025.[7][8] The transition from fossil fuels to electric cars features prominently in most climate change mitigation scenarios,[9] such as Project Drawdown's 100 actionable solutions for climate change.[10]</p>
      
       </div>
       <div className='col-sm-6 text-right'>
        <img src="https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='img-fluid'/>
       </div>
    </div>
    </div>
    </div>
  );
}; 

