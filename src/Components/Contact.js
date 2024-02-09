import React from 'react';
import './Css/Contact.css'




function Contact() {
  const mapImg = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e3_Sundown-Map-p-800.jpg";


  return (<>
    <div className="contact">
      <div className='contact-left'>
        <div className='img'>
          <img src={mapImg} alt='image' />
        </div>
      </div>
      <div className='contact-right'>
        <div className="center-animation">
          <div className="ca-circle-1"></div>
          <div className="ca-circle-2"></div>
        </div>
        <h5>Let's work together</h5>
        <a href='mailto:contact@sundown-studio.com'>contact@sundown-studio.com</a>

        <div className='ConElem'>
          <h4>Roots in Greenpoint,Brooklyn</h4>
          <h4>Physical work across the US</h4>
          <h4>Digital work across the world</h4>
        </div>

      </div>
    </div>
  </>
  )
}

export default Contact
