 
import React from 'react';
import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Tourist from './components/pages/Tourist';


function App() {
  return ( 
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home/>} />
          <Route path='/services' component={<Services/>} />
          <Route path='/tourist' component={<Tourist/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
