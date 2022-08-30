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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure reprehenderit quis id adipisci quisquam totam optio. Illum enim aliquam libero corrupti nostrum rem hic!</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
                <div className="col">
                    <img  className='card-img'  src='/images/div2.jpg' />
                    <h3>Thailand to offer tourism job opportunities to Filipinos– Frasco</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ullam maxime officiis hic fuga est quis, et dignissimos fugit temporibus non doloribus in laudantium quidem autem unde dolor minima velit soluta adipisci, corrupti vitae accusantium saepe sapiente! Error, eum necessitatibus!</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
                <div className="col">
                    <img  className='card-img'  src='/images/div3.jpg' />
                    <h3>PHL tourism chief pushes for increased connectivity, interoperability of vax certs, equalization of opportunities, and sustainability in APEC tourism ministers’ meet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi perferendis eius nobis quisquam ullam suscipit nihil alias fugiat earum pariatur culpa itaque officia facere quos veritatis consequatur repellendus molestias, blanditiis id? Doloribus mollitia voluptate expedita incidunt eveniet maxime reprehenderit minima rem. Praesentium, sed quae dolores sint labore expedita, soluta modi porro debitis vitae a quia blanditiis. Inventore maiores fuga facere beatae optio quasi omnis voluptate? Quaerat, officia praesentium eveniet voluptate accusantium quia excepturi. Quasi dicta adipisci, nulla necessitatibus eaque repellat! Animi assumenda, voluptatum accusamus qui cumque placeat nam ut ex? Atque reprehenderit excepturi culpa voluptas eaque alias officia ipsa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi perferendis eius nobis quisquam ullam suscipit nihil alias fugiat earum pariatur culpa itaque officia facere quos veritatis consequatur repellendus molestias, blanditiis id? Doloribus mollitia voluptate expedita incidunt eveniet maxime reprehenderit minima rem. Praesentium, sed quae dolores sint labore expedita, soluta modi porro debitis vitae a quia blanditiis. Inventore maiores fuga facere beatae optio quasi omnis voluptate? Quaerat, officia praesentium eveniet voluptate accusantium quia excepturi. Quasi dicta adipisci, nulla necessitatibus eaque repellat! Animi assumenda, voluptatum accusamus qui cumque placeat nam ut ex? Atque reprehenderit excepturi culpa voluptas eaque alias officia ipsa.</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
                <div className="col"> 
                    <img  className='card-img'  src='/images/Las-Casas-Filipinas-de-Acuzar-Banner.jpg' /> 
                    <h3>Las Casas Filipinas de Acuzar: Showcasing the best of Filipino service, heritage and craftmanship.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure reprehenderit quis id adipisci quisquam totam optio. Illum enim aliquam libero corrupti nostrum rem hic!</p>
                    <button className='btnReadMore'>Read More</button>
                </div>
                
                <div className="col"> 
                    <img  className='card-img'  src='/images/Outdoor-view.jpg' /> 
                    <h3>Explore, Enjoy and Relax.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure reprehenderit quis id adipisci quisquam totam optio. Illum enim aliquam libero corrupti nostrum rem hic!</p>
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