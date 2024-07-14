import React from 'react'
import ProjectComponent from './Components/Hero/Project/ProjectComponent';
import image from './Images/image.png';
import img from './Images/img14.jpg'
import img2 from './Images/img15.jpg'

const Project = () => {
    let images = [image,img,img2];
  return (
    <>
      <ProjectComponent images={images}/>
    </>
  )
}

export default Project;
