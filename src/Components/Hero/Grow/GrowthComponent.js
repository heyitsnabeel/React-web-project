import React from 'react';
import './GrowthComponent.css';

const GrowthComponent = ({images}) => {
  return (
    <>
        <div className="container-fluid py-4 my-4">
            <div className="container">
                <div className="row">
                    <h6 className='grow-h6'>EXPERTS GROWS</h6>
                </div>
                <h4 className='grow-h4'>OUR COMPANY GROWTH</h4>
                <div className="col-md-10">
                    <div className="container-fluid ">
                    <div className="row grow-box2 ">
                    
                        <div className="col-md-3 text-center grow-b1 py-3">
                            <img src={images[0]} alt="" className='grow-img'/>
                            <p className='grow-h2 '>199 +</p>
                            <p className='grow-p py-0'>Satisfied Customers</p>
                        </div>
                        <div className="col-md-3 text-center grow-b1 py-3">
                            <img src={images[1]} alt="" className='grow-img'/>
                            <p className='grow-h2 '>1591 +</p>
                            <p className='grow-p py-0'>Satisfied Customers</p>
                        </div>
                        <div className="col-md-3 text-center grow-b1 py-3">
                            <img src={images[2]} alt="" className='grow-img'/>
                            <p className='grow-h2 '>283 +</p>
                            <p className='grow-p py-0'>Satisfied Customers</p>
                        </div>
                        <div className="col-md-3 text-center grow-b1 py-3">
                            <img src={images[3]} alt="" className='grow-img'/>
                            <p className='grow-h2 '>75 +</p>
                            <p className='grow-p py-0'>Satisfied Customers</p>
                        </div>


                        </div>    
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default GrowthComponent;
