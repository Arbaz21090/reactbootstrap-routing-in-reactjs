import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import { About } from './About';
import {Home} from './Home';
import { Courses } from './Courses';

function App() {
  return (
    <div>

      <Menu />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>



    </div>
  );
}

export default App;

  