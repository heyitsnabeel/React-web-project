import React, { useState } from 'react';
import './Popup.css';
import axios from 'axios';

const Popup = ({ show }) => {
  const [adminregister, setAdminregister] = useState({});

  const inputHandler = (e) => {
    setAdminregister({ ...adminregister, [e.target.name]: e.target.value });
  };

  const registerAdmin = (e) => {
    e.preventDefault();
    axios.post("https://getform.io/f/azylyzgb", adminregister)
      .then((response) => {
        console.log(response);
        setAdminregister({});
        e.target.reset();
      }).catch(err => console.log(err));
  };

  return (
    <>
    {show && <div className="container-fluid">
          <div className="container">
            <div className="col-md-5 p-3 pop-div ">
              <form onSubmit={registerAdmin} autoComplete='off'>
                <h5 className='py-2'>Talk to us</h5>
                <div className="popup-input-container">
                  <input
                    type="text"
                    placeholder=" "
                    className='popup-input'
                    required
                    name="email"
                    value={adminregister.email || ''}
                    onChange={inputHandler}
                  />
                  <label className="popup-label">Email*</label>
                </div>

                <div className="row">
                <div className="popup-input-container col-md-6">
                  <input
                    type="text"
                    placeholder=" "
                    className='popup-input'
                    required
                    name="FirstName"
                    value={adminregister.FirstName || ''}
                    onChange={inputHandler}
                  />
                  <label className="popup-label">First Name</label>
                </div>

                  <div className="popup-input-container col-md-6">
                  <input
                    type="text"
                    placeholder=" "
                    className='popup-input'
                    required
                    name="LastName"
                    value={adminregister.LastName || ''}
                    onChange={inputHandler}
                  />
                  <label className="popup-label">Last Name</label>
                </div>
                </div>
                
                
                <input type="checkbox" />
                <span className='pop-span'>I Agree to Flye's terms and conditions, and provide consent to send me communication</span>
                <div>
                  <button type='submit' className='pop-btn py-2'>Contact Us</button>
                </div>
              </form>
            </div>
          </div>
        </div>}
      
    
    </>
  )
}

export default Popup;
