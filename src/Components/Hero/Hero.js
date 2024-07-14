import React, { useState } from 'react';
import './Hero.css';
import hero from '../../Images/hero.png';
import Popup from './Popup/Popup';

const Hero = () => {

  const [showPopup, setShowPopup] = useState(false);

  // const placeholders = ['work email*','First Name*','Last Name*']

  const togglePopup2 = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <div className="container-fluid my-5">
      <div className="col-md-8 hero-box">
            <div className="row">
            
                <div className="col-md-5 hero-panel">
                    <h6 className='hero-h6'>Award winning</h6>
                    <p className='hero-h2'>DIGITAL MARKETING AGENCY</p> 
                    <p className='hero-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, et earum optio architecto facere debitis libero voluptatibus aspernatur cum modi incidunt consequuntur ipsa dolorem corrupti, nisi, ut asperiores. Rem, fugiat.</p>
                    <button className='hero-btn px-3 py-2' onClick={togglePopup2}>CONTACT US</button>
                </div>
                <div className="col-md-5 ">
                      <img src={hero} alt="" className='hero-img'/>
                </div>
            </div>
            </div>
        </div>
        <Popup show={showPopup} />
    </>
  )
}

export default Hero;
