import React from 'react';
import '../../App.css';  
import CardsText from '../CardsText';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
    return (
        <>
            <HeroSection />
            <CardsText />
            <Footer />
        </>
      );
}

export default Home;