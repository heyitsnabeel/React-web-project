import React, { useState } from 'react';
import './Sercomponent.css';
import icon from '../../../Images/icon.svg';
import arrow from '../../../Images/arrow.svg'
import icon1 from '../../../Images/1.svg';
import icon2 from '../../../Images/2.svg';
import icon3 from '../../../Images/3.svg';

const SerComponent = ({images1}) => {

    const [index,setIndex] = useState(0);
    console.log(index[0]);

    const openFyle = () => {
        window.open("https://www.fylehq.com", "_blank");
    };

    const handler1= () =>{ 
        setIndex(0)
    }

    const handler2= () =>{
        setIndex(4)
    }
    const handler3= () =>{
        setIndex(8)
    }

  return (
    <div>
      <div className="container-fluid">
        <div className="container my-5 py-5">
        <h6 className='hero-h6'>what we do</h6>

        <div className='container-fluid'>
            <div className="row">
            <p className='hero-h2 col-md-4  px-0'>SERVICES PROVIDE FOR YOU</p>
            <p className='hero-p col-md-4 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, et earum optio architecto facere debitis libero voluptatibus aspernatur cum modi incidunt consequuntur ipsa dolorem corrupti, nisi, ut asperiores. Rem, fugiat.</p>
            </div>
        </div>

        <div className="row">

            <div className="col-md-3 ser-b1">
            <img src={images1[index]} alt="" className='ser-img'/>
            <div className="service-box1 py-5">
              <img src={icon} alt="" className='ser-icon ' />
              <h5>WEB DEVELOPMENT</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet.</p>
              <button className="service-btn2 p-2 px-3" onClick={openFyle}>READ MORE <img src={arrow} alt="" className='mx-2' /></button>
            </div>
            </div>

            <div className="col-md-3 ser-b1">
            <img src={images1[index+1]} alt="" className='ser-img'/>
            <div className="service-box1 py-5">
              <img src={icon} alt="" className='ser-icon ' />
              <h5>WEB DEVELOPMENT</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet.</p>
              <button className="service-btn2 p-2 px-3" onClick={openFyle}>READ MORE <img src={arrow} alt="" className='mx-2' /></button>
            </div>
            </div>

            <div className="col-md-3 ser-b1">
            <img src={images1[index+2]} alt="" className='ser-img'/>
            <div className="service-box1 py-5">
              <img src={icon} alt="" className='ser-icon ' />
              <h5>WEB DEVELOPMENT</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet.</p>
              <button className="service-btn2 p-2 px-3" onClick={openFyle}>READ MORE <img src={arrow} alt="" className='mx-2' /></button>
            </div>
            </div>

            <div className="col-md-3 ser-b1">
            <img src={images1[index+3]} alt="" className='ser-img'/>
            <div className="service-box1 py-5">
              <img src={icon} alt="" className='ser-icon ' />
              <h5>WEB DEVELOPMENT</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet.</p>
              <button className="service-btn2 p-2 px-3" onClick={openFyle}>READ MORE <img src={arrow} alt="" className='mx-2' /></button>
            </div>
            </div>
        </div>
        
        <div className='my-3 mx-3'>
            <button className='ser-btn' onClick={handler1} ><img src={icon1} alt="" /></button>
            <button className='ser-btn'onClick={handler2}><img src={icon2} alt="" /></button>
            <button className='ser-btn' onClick={handler3}><img src={icon3} alt="" /></button>
        </div>
        
                    
        </div>
      </div>
    </div>
  )
}

export default SerComponent;
