 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Tourist from './components/pages/Tourist';


function App() {
  return ( 
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Home' exact component={Home} />
          <Route path='/Services' component={Services} />
          <Route path='/Tourist' component={Tourist} /> 
        </Routes>
      </Router> 
    </>
  );
}

export default App;
