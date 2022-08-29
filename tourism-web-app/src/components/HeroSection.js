import React from 'react';
import { Button } from './Button';

function HeroSection() {
  return (
        <>
            <video src='C:\Users\gabri\OneDrive\Documents\GitHub\ReactJS-Portfolio\tourism-web-app\public\videos\video-0002.mp4'  autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                BOOK NOW
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}
                >
                WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
        </div>
      </>
  )
}

export default HeroSection