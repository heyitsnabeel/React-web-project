import React from 'react'
import GrowthComponent from './Components/Hero/Grow/GrowthComponent';
import heart from './Images/heart (2).svg';
import clock from './Images/clock (3).svg';
import path1 from './Images/Path 4402.svg'
import path2 from './Images/Path 4406.svg'

const Growth = () => {
     let images = [heart,clock,path1,path2]
  return (
    <>
      <GrowthComponent images={images}/>
    </>
  )
}

export default Growth;
