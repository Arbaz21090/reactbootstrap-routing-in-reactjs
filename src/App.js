import React from 'react';
import 'antd/dist/reset.css';
import {  Route, Routes } from 'react-router-dom';
// import Menu from './Menu';
import {Learn} from './Learn';
import { Login } from './Login';
import { Sign } from './Sign';
import  Head  from './Head';

import "./App.css";
// import Slider from './Slider';
import Foot from './Foot';
import { Home } from './Home';
import {Search} from './Search';
// import { Avatar } from './Avatar';

// import Find1 from './Find1';
function App() {
  return (
    <div>

     {/* <Menu /> */}
<Head/>
{/* <BrowserRouter> */}
<Routes>
         <Route path='/' element={<Home />} />
        <Route path='/Learn' element={<Learn />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Search' element={<Search />} />
        {/* <Route path='/Avatar' element={<Avatar />} /> */}
      </Routes>
 {/* </BrowserRouter> */}
     
    <Foot/>
{/* <Slider/> */}
{/* <Find1/> */}
    </div>
  );
}

export default App;

  