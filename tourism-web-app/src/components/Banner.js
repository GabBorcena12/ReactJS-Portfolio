import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <>
        <div className='divBanner'> 
            <div className='banner-wrapper'>
                <div className='banner-overlay'>
                    <div className='banner-items-left banner-position'> 
                        <img className='bannerImageLogo' src='/images/dot-tourismlogo.png' alt='banner'/>
                        <h2>Tourism in the Philippines</h2>  
                    </div> 
                    <div className='banner-items-right banner-position'>
                        <p className='withIndent'>The Philippines is a land rich in natural resources, scenic locales, and friendly smiles. Here, everybody is welcome to be part of the fun - from the captivating coastlines to the creative native crafts, to the unique gastronomic experience, you will find the kind of fun that is uniquely yours.</p>
                        <p className='withIndent'>Just like the fun that can be experienced, opportunities abound here in the Philippines. Whether that is through tourism, hospitality, manufacturing, or sustainable development, there are a plethora of ways to grow your business here.</p>
                        <p><span>So we invite you to explore our islands and discover that it is truly more fun here in the Philippines.</span></p>
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner