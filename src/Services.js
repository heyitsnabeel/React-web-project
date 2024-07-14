import React from 'react'
import SerComponent from './Components/Hero/SerComponent/SerComponent';
import a from './Images/1.png';
import b from './Images/2.png';
import c from './Images/img2.jpg';
import e from './Images/img5.avif';
import f from './Images/img6.jpg';
import g from './Images/img7.jpg';
import h from './Images/img9.webp';
import i from './Images/img10.avif';
import j from './Images/img11.jpeg'; 
import k from './Images/img12.avif';

const Services = () => {
    let images1 = [a,b,c,i,e,f,g,h,i,j,k,a];
  return (
    <div>
      <SerComponent images1={images1} />
    </div>
  )
}

export default Services;
