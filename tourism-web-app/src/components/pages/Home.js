import React from 'react';
import '../../App.css';  
import CardsText from '../CardsText';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Banner from '../Banner';
import CardsPicture from '../CardsPicture';

function Home() {
    return (
        <>
            <HeroSection />
            <CardsText />
            <Banner />
            <CardsPicture />
            <Footer />
        </>
      );
}

export default Home;