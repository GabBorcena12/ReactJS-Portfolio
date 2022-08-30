import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const whitetext ={
  color:"white",
  textAlign:"center"
}
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our campagain to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'> 
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>GOVERMENT AGENCIES</h2> 
            <Link to='/'>Tourism Infrastructure and Enterprise Zone Authority</Link>
            <Link to='/'>Tourism Promotions Board</Link>
            <Link to='/'>Intramuros Administration</Link>
            <Link to='/'>Duty Free Philippines Corp.</Link>
            <Link to='/'>Philippine Commission on Sports SCUBA Diving</Link>
            <Link to='/'>Philippine Retirement Authority</Link>
          </div> 
          <div className='footer-link-items'>
            <h2>FOREIGN OFFICES</h2>
            <Link to='/'><img src='/images/australia.png' />&nbsp;&nbsp;<span className='img-flag-txt'>Australia</span></Link>
            <Link to='/'><img src='/images/china.png' />&nbsp;&nbsp;<span className='img-flag-txt'>China</span></Link>
            <Link to='/'><img src='/images/germany.png' />&nbsp;&nbsp;<span className='img-flag-txt'>Germany</span></Link>
            <Link to='/'><img src='/images/japan.png' />&nbsp;&nbsp;<span className='img-flag-txt'>Japan</span></Link>
            <Link to='/'><img src='/images/south-korea.png' />&nbsp;&nbsp;<span className='img-flag-txt'>Korea</span></Link>
            <Link to='/'><img src='/images/russia.png' />&nbsp;&nbsp;<span className='img-flag-txt'>Russia</span></Link>
            <Link to='/'><img src='/images/taiwan.png' />&nbsp;&nbsp;<span className='img-flag-txt'>Taiwan</span></Link>
            <Link to='/'><img src='/images/united-kingdom.png' />&nbsp;&nbsp;<span className='img-flag-txt'>UK</span></Link>
            <Link to='/'><img src='/images/united-states-of-america.png' />&nbsp;&nbsp;<span className='img-flag-txt'>USA</span></Link> 
          </div> 
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <img src='/images/dot-logo.png'/>
              <h6 style={whitetext}>Copyright © 2022</h6>
            </div> 
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
