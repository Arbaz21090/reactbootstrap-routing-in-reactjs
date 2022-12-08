import React from 'react';
import { Button, Result } from 'antd';
import './style.css';
import { NavLink } from 'react-router-dom';
 var Error = () => (
  <Result
    status="403"
    title="404"
    subTitle="Sorry, This page does't Exist."
    extra={<NavLink to="/"><Button style={{backgroundColor:'#593963', color:"#fff"}}>Back to Home</Button></NavLink>}
  />
);
export default Error;