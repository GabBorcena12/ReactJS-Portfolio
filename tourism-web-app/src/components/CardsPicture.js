import React from 'react';
import './CardsPicture.css'; 

function CardsPicture() {
  return (
    <>
        <div className='card-container'>
            <div className='left-card-container'>
                <h1>PHILIPPINE TOURISM INDUSTRIES</h1>
                <button className='btnDoingBusinessPH'>Doing Business in PH</button>
            </div>
            <div className='right-card-container'>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-001.png'/>
                    </div>
                    <h2>BEACH RESORTS</h2>
                </div>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-002.png'/>
                    </div>
                    <h2>CRUISE</h2>
                </div>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-003.png'/>
                    </div>
                    <h2>FESTIVAL EVENTS</h2>
                </div>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-004.png'/>
                    </div>
                    <h2>GOLF COURSES</h2>
                </div>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-005.png'/>
                    </div>
                    <h2>NATIONAL PARKS</h2>
                </div> 

                
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-006.png'/>
                    </div>
                    <h2>SCUBA DIVING</h2>
                </div>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-007.png'/>
                    </div>
                    <h2>HIKING / TREKKING</h2>
                </div>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-008.png'/>
                    </div>
                    <h2>URBAN ATTRACTIONS</h2>
                </div>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-009.png'/>
                    </div>
                    <h2>YATCHING MARINAS</h2>
                </div>
                <div className='col'>
                    <div className='overlay'>
                        <img src='/images/tabpiic-010.png'/>
                    </div>
                    <h2>NATIONAL ECOTOURISM</h2>
                </div> 
            </div>
        </div>
    </>
  )
}

export default CardsPicture