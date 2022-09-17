import React from 'react';
import './CardsText.css';

function CardsText() {
  return (
    <>
    <div className='main-container'>
        <div id="divHeader"> 
            <section className="header">
                    <h1>News and Updates</h1>
                </section>
        </div>
        <div id="flex"> 
            <section className="container">
                <div className="col">
                    <img  className='card-img'  src='/images/Div1.jpeg' />
                    <h3>DOT to ink tourism job fair program – Trabaho, Turismo, Asenso! with DOLE; Domestic, international jobs to be available to tourism job hunters</h3> 
                    <p>Loremipsum dolor sit amet consectetur, elit. Omnis, ullam maxime officiis hic fuga est quis, et dignissimos fugit temporibus non doloribus in laudantium quidem autem unde dolor minima velit soluta !</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
                <div className="col">
                    <img  className='card-img'  src='/images/div2.jpg' />
                    <h3>Thailand to offer tourism job opportunities to Filipinos– Frasco</h3>
                    <p>Loremipsum dolor sit amet consectetur, elit. Omnis, ullam maxime officiis hic fuga est quis, et dignissimos fugit temporibus non doloribus in laudantium quidem autem unde dolor minima velit soluta !</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
                <div className="col">
                    <img  className='card-img'  src='/images/div3.jpg' />
                    <h3>PHL tourism chief pushes for increased connectivity, interoperability of vax certs, equalization of opportunities, and sustainability in APEC tourism ministers’ meet</h3>
                    <p>Loremipsum dolor sit amet consectetur, elit. Omnis, ullam maxime officiis hic fuga est quis, et dignissimos fugit temporibus non doloribus in laudantium quidem autem unde dolor minima velit soluta !</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
                <div className="col"> 
                    <img  className='card-img'  src='/images/Las-Casas-Filipinas-de-Acuzar-Banner.jpg' /> 
                    <h3>Las Casas Filipinas de Acuzar: Showcasing the best of Filipino service, heritage and craftmanship.</h3>
                    <p>Loremipsum dolor sit amet consectetur, elit. Omnis, ullam maxime officiis hic fuga est quis, et dignissimos fugit temporibus non doloribus in laudantium quidem autem unde dolor minima velit soluta !</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
                
                <div className="col"> 
                    <img  className='card-img'  src='/images/Outdoor-view.jpg' /> 
                    <h3>Explore, Enjoy and Relax.</h3>
                    <p>Loremipsum dolor sit amet consectetur, elit. Omnis, ullam maxime officiis hic fuga est quis, et dignissimos fugit temporibus non doloribus in laudantium quidem autem unde dolor minima velit soluta !</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
            </section>
        </div>
        <div id="divViewMore"> 
            <section className="header">
                <button className='btnViewMore'>View More</button>
            </section>
        </div>
    </div>
    </>
    
  )
}

export default CardsText;