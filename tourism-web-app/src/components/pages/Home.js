import React from 'react';
import '../../App.css';  
import CardsText from '../CardsText';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Banner from '../Banner';

function Home() {
    return (
        <>
            <HeroSection />
            <CardsText />
            <Banner />
            <Footer />
        </>
      );
}

export default Home;