import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const buttonStyles = {
    backgroundColor: "#007bff" 
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <img src='https://philippines.travel/images/dot-logo.png' className="App-logo" alt="logo" />
           
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                See and Do
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Tourist'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Where to Go
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events and Festivals
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                7641 Islands
              </Link>
            </li>
            <li className='nav-item' style={buttonStyles}>
              <Link
                to='/Spots'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Save Our Spots
              </Link>
            </li>
          </ul> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;
