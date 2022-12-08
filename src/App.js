import React from 'react';

import 'antd/dist/reset.css';
import {  Route, Routes } from 'react-router-dom';

import {Learn} from './Learn';
import { Login } from './Login';
import { Sign } from './Sign';
import  Head  from './Head';

import "./App.css";

import Foot from './Foot';
import { Home } from './Home';
import {Search} from './Search';
import Error from "./Error"



function App() {
  return (
    <div>

    
<Head/>

<Routes>
         <Route path='/' element={<Home />} />
        <Route path='/Learn' element={<Learn />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Search' element={<Search />} />
        <Route path='*' element={<Error />} />
    
     
      </Routes>

     
    <Foot/>

    </div>
  );
}

export default App;

  