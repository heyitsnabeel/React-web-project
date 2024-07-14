import React from 'react';
import group from './Images/Group 500.png';
import './index.css';

const Footer = () => {
  return (
    <>
     <div className="container-fluid footer-b1" >
        <div className="container">
            <img src={group} alt="" className='footer-img'/>
        </div>
     </div> 
    </>
  )
}

export default Footer;
