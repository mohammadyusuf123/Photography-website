import React from 'react';
import'./Footer.css'
import logo from'../../images/logo.png'

const Footer = () => {
    return (
        <div className='d-flex justify-content-sm-center w-100 bg-info text-white'>
            <div className='list'>
                <div>
                    <img src={logo} alt="" />
                </div>
            <>
            <ul>
              <li>About Us</li>
              <li>Success</li>
              <li>privacy Policy</li>
              <li>Terms&Condition</li>
                <li>Help</li>
            </ul> 
          </>
          <div>
            <h6 class="mt-3">Nijol Creative Photography</h6>
          <h6 class="ms-3">@ Copyright 2022</h6>
          </div>
            </div>
        </div>
    );
};

export default Footer;