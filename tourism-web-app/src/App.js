 
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; 
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Tourist from './components/pages/Tourist';
import Spots from './components/pages/Spots';
import Events from './components/pages/Events';

function App() {
  return ( 
    <>
      <BrowserRouter>
        <Navbar />
        <Routes> 
            <Route path="Home" element={<Home />} />
            <Route path="Services" element={<Services />} />
            <Route path="Tourist" element={<Tourist />} />
            <Route path="Spots" element={<Spots />} />
            <Route path="Events" element={<Events />} /> 
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
