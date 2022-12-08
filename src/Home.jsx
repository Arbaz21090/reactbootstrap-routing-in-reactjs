import React from "react";
import { Col } from "react-bootstrap";
import Slider from './Slider';
import Find from './OwlCarousal/Find'
import Find2 from "./Find2";
import Luxury from "./Luxury";
import Cards from './Cards'
import './style.css';
export var Home =()=>{
    return(
      <div>
     
         
          <Col>
          <Slider/>
         
          
          <Find/>
          <Find2/>
          <Luxury/>
          <Cards/> 
        
             </Col>
        
          

      </div>
    );
}