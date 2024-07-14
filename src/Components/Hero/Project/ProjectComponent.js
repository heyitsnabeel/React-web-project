import React, { useState } from 'react';
import './ProjectComponent.css';

const ProjectComponent = ({images}) => {
    const [myArray, setMyArray] = useState([
        { h:"Genderless Kei-Japan's Hot",content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut, accusamus possimus quod reprehenderit alias.'},
        {h:"Better Strategy and Quality",content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut, accusamus possimus quod reprehenderit alias.'},
        {h:"Genderless Kei-Japan's Hot",content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut, accusamus possimus quod reprehenderit alias.'}
    ]);
    const [itemIndex, setItemIndex] = useState(-1); 
    const handleClick = (index) => {
  
      const newArray = [...myArray];
      console.log('result1',newArray)
      newArray[index].item = myArray.item;
           
      if (itemIndex !== -1 && itemIndex !== index) {
        newArray[itemIndex].content =` item${myArray[index].content}`;
      }
   console.log('result2',newArray)
      setMyArray(newArray);
      setItemIndex(index);
  
    };

  return (
    <> 
      <div className="container-fluid">
        <div className="col-md-8 project-b1">
            <p className='hero-h6 px-3'>OUR PROJECT</p>
            <h4 className='px-3'>WHY WE ARE BEST</h4>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-md-8 ">
                        <img src={images[itemIndex]} alt="" className='project-img'/>
                    </div> 


                    <div className="col-md-4">
                        {myArray.map((item, index) => (
                        <div >

                    <button className={`project-btn `} style={{backgroundColor: index==itemIndex?'#ff3147':'#ffffff',color:'#000000'}} key={index} onClick={() => handleClick(index)}>
                    <h6>{item.h}</h6>
                    <p className='project-p'>{item.content}</p>  
                        </button>
                        </div>
                            ))}
                    </div>



                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProjectComponent;
